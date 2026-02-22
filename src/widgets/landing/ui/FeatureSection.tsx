import { Users, Layers, BarChart3 } from "lucide-react";

export function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Why ChurchMS?</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to grow your church
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              We provide the tools to help you focus on ministry, not administration. Streamline your operations with our integrated suite.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col space-y-4 rounded-xl border p-8 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
            <div className="p-3 w-fit rounded-lg bg-blue-100 text-blue-600">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Membership Tracking</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Know your people with comprehensive profiles. Track spiritual journeys, attendance, and important milestones in one secure place.
            </p>
          </div>
           {/* Feature 2 */}
          <div className="flex flex-col space-y-4 rounded-xl border p-8 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
            <div className="p-3 w-fit rounded-lg bg-blue-100 text-blue-600">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Group Management</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Easily organize small groups, volunteer teams, and community events. Empower leaders to manage their own rosters and communication.
            </p>
          </div>
           {/* Feature 3 */}
          <div className="flex flex-col space-y-4 rounded-xl border p-8 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
            <div className="p-3 w-fit rounded-lg bg-blue-100 text-blue-600">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Reporting & Analytics</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Visualize trends, financial health, and growth metrics with one click. Make data-driven decisions to steer your ministry forward.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
            <button className="px-6 py-3 bg-zinc-100 text-zinc-900 font-medium rounded-lg hover:bg-zinc-200 transition-colors">
                View All Features
            </button>
        </div>
      </div>
    </section>
  );
}
