
import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Building, Home } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-tyger-gray">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-tyger-blue mb-6">
              About us
            </h1>
            <p className="text-lg mb-6">
              Here at Tyger Housing, we're dedicated to the success of our landlords across London, Kent and Surrey.
            </p>
            <p className="text-gray-600 mb-8">
              We help with our experienced property professionals, making sure a steady and hassle-free rental income. Our team is there to minimize your risk, maximize your rental income and take care of all the complex aspects of tenancy and property upkeep.
            </p>
            <Link to="contact" className="inline-block">
            <Button className="bg-tyger-yellow hover:bg-tyger-yellow/90 text-tyger-blue font-medium px-8 py-2 h-12 rounded-full">
              Get started with us
            </Button>
            </Link>
            
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-white/80 w-full rounded-lg p-6 shadow-md">
              <AspectRatio ratio={4/3} className="bg-tyger-gray/20 rounded-md overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center p-8">
                  <Home className="w-24 h-24 text-tyger-blue mb-4 opacity-80" />
                  <div className="text-tyger-blue text-xl font-medium text-center">
                    Your Property, Our Priority
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
