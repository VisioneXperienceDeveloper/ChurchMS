import { Church, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 text-sm text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-xl text-foreground">
            <Church className="h-6 w-6 text-primary" />
            <span>ChurchMS</span>
          </div>
          <p className="max-w-xs">
            The all-in-one platform to manage your congregation, track growth, and foster community connection.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-foreground">Product</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-primary">Features</Link></li>
            <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
            <li><Link href="#" className="hover:text-primary">Security</Link></li>
            <li><Link href="#" className="hover:text-primary">Roadmap</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-primary">Documentation</Link></li>
            <li><Link href="#" className="hover:text-primary">API Reference</Link></li>
            <li><Link href="#" className="hover:text-primary">Guides</Link></li>
            <li><Link href="#" className="hover:text-primary">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-foreground">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-primary">About</Link></li>
            <li><Link href="#" className="hover:text-primary">Careers</Link></li>
            <li><Link href="#" className="hover:text-primary">Legal</Link></li>
            <li><Link href="#" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-col justify-between border-t pt-8 px-4 md:flex-row md:px-6">
        <p>&copy; 2026 ChurchMS Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
