"use client";

import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@client/shared/lib/utils";
import { Badge } from "@client/shared/ui/badge";
import { Card, CardContent } from "@client/shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@client/shared/ui/avatar";
import { 
  Button, 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription,
  Input,
  Label
} from "@client/shared/ui";
import { GroupHierarchyNode } from "@shared/types/group";
import { apiClient } from "@client/shared/api-client";
import { CreateGroupRequest, UpdateGroupRequest } from "@shared/types/group";
import Link from "next/link";
import { 
  Loader2, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Plus, 
  Pencil, 
  Trash2,
  ExternalLink
} from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export function OrgChart() {
  const [data, setData] = useState<GroupHierarchyNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // CRUD states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<GroupHierarchyNode | null>(null);
  const [newNodeName, setNewNodeName] = useState("");
  const [editingNodeName, setEditingNodeName] = useState("");
  const [isActionLoading, setIsActionLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await apiClient.get<GroupHierarchyNode[]>('/api/v1/groups');
    if (response.success) {
      setData(response.data || []);
    } else {
      setError(response.error?.message || "Failed to fetch org chart data");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const init = async () => {
      await fetchData();
    };
    init();
  }, [fetchData]);

  const handleAddGroup = async () => {
    if (!selectedNode || !newNodeName) return;
    setIsActionLoading(true);
    const payload: CreateGroupRequest = {
      name: newNodeName,
      parentId: selectedNode.id,
      groupId: selectedNode.id,
    };
    const response = await apiClient.post('/api/v1/groups', payload);
    if (response.success) {
      await fetchData();
      setIsAddModalOpen(false);
      setNewNodeName("");
    }
    setIsActionLoading(false);
  };

  const handleEditGroup = async () => {
    if (!selectedNode || !editingNodeName) return;
    setIsActionLoading(true);
    const payload: UpdateGroupRequest = {
      name: editingNodeName,
    };
    const response = await apiClient.patch(`/api/v1/groups/${selectedNode.id}`, payload);
    if (response.success) {
      await fetchData();
      setIsEditModalOpen(false);
    }
    setIsActionLoading(false);
  };

  const handleDeleteGroup = async () => {
    if (!selectedNode) return;
    setIsActionLoading(true);
    const response = await apiClient.delete(`/api/v1/groups/${selectedNode.id}`);
    if (response.success) {
      await fetchData();
      setIsDeleteModalOpen(false);
    }
    setIsActionLoading(false);
  };

  if (loading && data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 h-[600px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Loading organizational structure...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-destructive h-[600px] flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] border rounded-xl bg-slate-50/30 overflow-hidden">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.1}
        maxScale={2}
        centerOnInit={true}
        limitToBounds={false}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Controls */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <Button size="icon" variant="secondary" onClick={() => zoomIn()} className="bg-white shadow-sm border">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={() => zoomOut()} className="bg-white shadow-sm border">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={() => resetTransform()} className="bg-white shadow-sm border">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>

            <TransformComponent 
              wrapperClass="w-full h-full"
              contentClass="flex items-start justify-center p-4 min-w-full"
            >
              <div className="flex flex-col items-center">
                {data.map((rootNode) => (
                  <div key={rootNode.id} className="flex flex-col items-center">
                    <OrgNode 
                      node={rootNode} 
                      onAdd={() => { setSelectedNode(rootNode); setIsAddModalOpen(true); }}
                      onEdit={() => { setSelectedNode(rootNode); setEditingNodeName(rootNode.name); setIsEditModalOpen(true); }}
                      onDelete={() => { setSelectedNode(rootNode); setIsDeleteModalOpen(true); }}
                    />
                    {rootNode.children && rootNode.children.length > 0 && (
                      <OrgChildren 
                        nodes={rootNode.children} 
                        onAdd={(n) => { setSelectedNode(n); setIsAddModalOpen(true); }}
                        onEdit={(n) => { setSelectedNode(n); setEditingNodeName(n.name); setIsEditModalOpen(true); }}
                        onDelete={(n) => { setSelectedNode(n); setIsDeleteModalOpen(true); }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {/* CRUD Modals */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Group</DialogTitle>
            <DialogDescription>Create a new subgroup under {selectedNode?.name}.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input
                id="name"
                value={newNodeName}
                onChange={(e) => setNewNodeName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
            <Button onClick={handleAddGroup} disabled={isActionLoading}>
              {isActionLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Group</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-name" className="text-right">Name</Label>
              <Input
                id="edit-name"
                value={editingNodeName}
                onChange={(e) => setEditingNodeName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
            <Button onClick={handleEditGroup} disabled={isActionLoading}>
              {isActionLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Group</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{selectedNode?.name}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteGroup} disabled={isActionLoading}>
              {isActionLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface NodeProps { 
  node: GroupHierarchyNode; 
  onAdd: (node: GroupHierarchyNode) => void;
  onEdit: (node: GroupHierarchyNode) => void;
  onDelete: (node: GroupHierarchyNode) => void;
}

function OrgChildren({ nodes, onAdd, onEdit, onDelete }: { nodes: GroupHierarchyNode[] } & Omit<NodeProps, 'node'>) {
  return (
    <>
      <div className="h-10 w-px bg-slate-300"></div>
      <div className="flex relative items-start gap-12">
        {nodes.map((child, index) => (
          <div key={child.id} className="flex flex-col items-center relative">
            {/* Top connector bar */}
            <div className="relative w-full h-10 flex justify-center">
              <div className="h-full w-px bg-slate-300 absolute top-0"></div>
              {nodes.length > 1 && (
                <div className={cn(
                  "absolute top-0 h-px bg-slate-300",
                  index === 0 ? "w-1/2 right-0" : 
                  index === nodes.length - 1 ? "w-1/2 left-0" : "w-full"
                )}></div>
              )}
            </div>

            <OrgNode node={child} onAdd={onAdd} onEdit={onEdit} onDelete={onDelete} />

            {child.children && child.children.length > 0 && (
              <OrgChildren nodes={child.children} onAdd={onAdd} onEdit={onEdit} onDelete={onDelete} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function OrgNode({ node, onAdd, onEdit, onDelete }: NodeProps) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "CHURCH": return "bg-blue-600 shadow-blue-100";
      case "GROUP_TYPE": return "bg-indigo-600 shadow-indigo-100";
      case "GROUP": return "bg-amber-600 shadow-amber-100";
      case "SUBGROUP": return "bg-emerald-600 shadow-emerald-100";
      default: return "bg-slate-600 shadow-slate-100";
    }
  };
  
  const getBorderColor = (type: string) => {
     switch (type) {
      case "CHURCH": return "border-blue-200 bg-blue-50/30";
      case "GROUP_TYPE": return "border-indigo-200 bg-indigo-50/30";
      case "GROUP": return "border-amber-200 bg-amber-50/30";
      case "SUBGROUP": return "border-emerald-200 bg-emerald-50/30";
      default: return "border-slate-200";
    }
  };

  const avatarFallback = node.leaderName ? node.leaderName.charAt(0) : "?";

  return (
    <div className="relative flex flex-col items-center group/node animate-in fade-in zoom-in-95 duration-300">
      <Badge className={cn("absolute -top-3 z-10 px-3 py-0.5 font-bold shadow-lg", getBadgeColor(node.type))}>
        {node.type}
      </Badge>
      
      <Card className={cn(
        "w-64 border-2 transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-default overflow-hidden", 
        getBorderColor(node.type)
      )}>
        <CardContent className="p-0">
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-2">
              <Link 
                href={`/groups/${node.id}`}
                className="group/link flex items-center gap-1 overflow-hidden"
              >
                <h3 className="font-bold text-base leading-tight text-slate-900 group-hover/node:text-primary transition-colors truncate">
                  {node.name}
                </h3>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 text-primary transition-all shrink-0" />
              </Link>
              <div className="flex gap-1 opacity-0 group-hover/node:opacity-100 transition-opacity">
                <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => onEdit(node)}>
                  <Pencil className="h-3 w-3" />
                </Button>
                <Button size="icon" variant="ghost" className="h-6 w-6 text-destructive" onClick={() => onDelete(node)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            {node.leaderName ? (
              <div className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-slate-100">
                <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                  <AvatarImage src={node.leaderAvatar} className="object-cover" />
                  <AvatarFallback className="bg-slate-100 text-slate-500 text-sm font-bold">{avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="font-semibold text-xs text-slate-700 truncate w-full">{node.leaderName}</span>
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Group Leader</span>
                </div>
              </div>
            ) : (
                <div className="h-10 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-[10px] text-slate-400">No Leader Assigned</span>
                </div>
            )}

            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{node.memberCount} Members</span>
              </div>
              {node.children && node.children.length > 0 && (
                <div className="flex items-center gap-1">
                  <span>{node.children.length} {node.type === 'CHURCH' ? 'Types' : 'Sub'}</span>
                </div>
              )}
            </div>
          </div>
          
          <button 
            onClick={() => onAdd(node)}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group/add"
          >
            <Plus className="h-3 w-3 text-slate-400 group-hover/add:text-primary group-hover/add:scale-110 transition-all" />
            <span className="text-[10px] font-bold text-slate-500 group-hover/add:text-primary">Add Sub-Group</span>
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
