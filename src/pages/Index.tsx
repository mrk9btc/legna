import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Brace } from "@/components/Brace";
import { Cocina } from "@/components/Cocina";
import { Community } from "@/components/Community";
import { Wine } from "@/components/Wine";
import { SignatureExperience } from "@/components/SignatureExperience";
import { Club } from "@/components/Club";
import { Marketing } from "@/components/Marketing";
import { Team } from "@/components/Team";
import { Photocall } from "@/components/Photocall";
import { BrandIdentity } from "@/components/BrandIdentity";
import { Footer } from "@/components/Footer";
import { initializeAnimations } from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations and smooth scroll
    initializeAnimations();
    
    // Analytics setup
    window.dataLayer = window.dataLayer || [];
    
    return () => {
      // Cleanup GSAP instances if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Brace />
        <Cocina />
        <Wine />
        <Community />
        <SignatureExperience />
        <Club />
        <Marketing />
        <Team />
        <Photocall />
        <BrandIdentity />
      </main>
      <Footer />
    </div>
  );
};

export default Index;