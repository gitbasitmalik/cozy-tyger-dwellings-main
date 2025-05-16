
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServiceSection from "@/components/ServiceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";


const Index = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ServiceSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

