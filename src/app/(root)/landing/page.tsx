import {
  Header,
  HeroSection,
  StatsSection,
  FeatureSection,
  TestimonialSection,
  CtaSection,
  Footer,
} from "@/widgets/landing/ui";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
