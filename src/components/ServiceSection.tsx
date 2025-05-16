
import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Building, Key, PoundSterling } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex items-center justify-center">
            <div className="bg-white w-full rounded-lg shadow-md">
              <AspectRatio ratio={1/1} className="bg-tyger-gray/10 rounded-md overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Building className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-tyger-blue" />
                    <PoundSterling className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-20 h-20 text-tyger-yellow" />
                    <Key className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 text-tyger-blue/70" />
                    <div className="absolute bottom-4 left-0 right-0 text-center text-tyger-blue font-medium">
                      Property Management
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-tyger-blue mb-6">
              Minimising your risk, maximising your rental income
            </h2>
            <p className="text-gray-600 mb-6">
              We work with housing associations and registered providers to deliver a bespoke property management service for private landlords living through our active network across London, Kent and Surrey.
            </p>
            <p className="text-gray-600 mb-6">
              Our experienced team assists landlords in navigating the complex world of property management, ensuring their homes can generate the maximum potential income with minimal hassle.
            </p>
            <p className="text-gray-600 mb-8">
              Tyger Housing's ethos provides them with peace of mind that their valuable property is being taken care of, whilst also assuring them regular rental payments regardless of any void periods.
            </p>
           <Link to="/guaranteed-rent">
           <Button className="bg-tyger-blue hover:bg-tyger-blue/90 text-white font-medium">
              Guaranteed Rent
            </Button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
