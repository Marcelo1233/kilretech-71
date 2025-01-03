import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DeliverySection } from "@/components/DeliverySection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <DeliverySection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;