import FeaturesGrid from "@/components/ui/FeaturesGrid";
import HeroSection from "@/components/ui/HeroSection";
import StatsSection from "@/components/ui/StatsSection";
import CtaSection from "@/components/ui/CtaSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
      <CtaSection />
    </main>
  );
}
