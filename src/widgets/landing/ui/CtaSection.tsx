import Link from "next/link";
import { Button } from "@/shared/ui/button";

export function CtaSection() {
  return (
    <section className="w-full py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Ready to grow your church?
          </h2>
          <p className="text-blue-100 md:text-xl">
            Join thousands of churches using ChurchMS to simplify management and multiply impact. Start your free 14-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto font-semibold h-12 px-8">
                  Get Started for Free
                </Button>
            </Link>
             <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto font-semibold h-12 px-8">
                  Contact Sales
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
