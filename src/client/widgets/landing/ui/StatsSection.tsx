export function StatsSection() {
  return (
    <section className="w-full py-12 bg-blue-50/50 border-y border-blue-100/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-600">5,000+</h3>
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">Churches Helped</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-600">1.2M+</h3>
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">Active Members</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-600">250k+</h3>
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">Events Managed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
