import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Empower Your Ministry, Organize Your Church.
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                The all-in-one platform to manage your congregation, track growth, and foster community connection. Simplify administration so you can focus on people.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="h-11 px-8 bg-blue-600 hover:bg-blue-700 text-white">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline" className="h-11 px-8 flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" />
                  Watch Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-zinc-200" />
                ))}
              </div>
              <p>Trusted by 5,000+ church leaders</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Visual Placeholder for Right Side Image/Graphic */}
             <div className="relative h-[400px] w-full max-w-[500px] rounded-xl bg-blue-50/50 p-4 border border-blue-100 shadow-xl overflow-hidden group">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-lg shadow-sm border border-zinc-100 flex items-center justify-center">
                    <span className="text-zinc-400 font-medium">Dashboard Preview</span>
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                 <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
