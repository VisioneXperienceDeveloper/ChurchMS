export function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <blockquote className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-900">
                &ldquo;ChurchMS has completely transformed how we connect with our congregation. We spend less time on spreadsheets and more time with our people. It&apos;s truly a blessing for our administrative team.&rdquo;
            </p>
            <footer className="text-base md:text-lg">
                <span className="font-bold text-zinc-900">Rev. David Carter</span>
                <span className="text-zinc-500 mx-2">&middot;</span>
                <span className="text-zinc-500">Senior Pastor at Grace Community</span>
            </footer>
        </blockquote>
      </div>
    </section>
  );
}
