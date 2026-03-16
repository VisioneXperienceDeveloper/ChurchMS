import Link from "next/link";
import { Button } from "@client/shared/ui/button";
import { Church } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Church className="h-6 w-6 text-primary" />
          <span>ChurchMS</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="#docs" className="hover:text-primary transition-colors">
            Docs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Log In
          </Link>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
