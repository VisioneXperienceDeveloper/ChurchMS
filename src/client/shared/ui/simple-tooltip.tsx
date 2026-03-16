"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@client/shared/lib/utils";

interface SimpleTooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "right" | "top" | "bottom" | "left";
  className?: string;
}

export function SimpleTooltip({
  content,
  children,
  side = "right",
  className,
}: SimpleTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Auto-hide after 1.5 seconds
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white shadow-md transition-opacity duration-200",
            side === "right" && "left-full ml-1",
            side === "left" && "right-full mr-1",
            side === "top" && "bottom-full mb-1 left-1/2 -translate-x-1/2",
            side === "bottom" && "top-full mt-1 left-1/2 -translate-x-1/2",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
