
import React from "react";
import { CheckCircle2, ClipboardCheck, HandshakeIcon, Shield } from "lucide-react";

const steps = [
  {
    title: "Free Valuation",
    description: "At no cost, we'll inspect your property and provide a comprehensive rental evaluation to ensure optimal pricing for your property in the current market.",
    icon: CheckCircle2
  },
  {
    title: "Property Inspection",
    description: "We'll inspect your property carefully, take thorough inventory, and create a detailed report with Energy Performance Certificate and Gas Safety Certificate to ensure compliance.",
    icon: ClipboardCheck
  },
  {
    title: "Terms & Handover",
    description: "After agreeing on terms, we'll assist with paperwork, ensure your property meets all regulatory requirements, and handle key exchange for a smooth transition.",
    icon: HandshakeIcon
  },
  {
    title: "Peace of Mind",
    description: "Your property is safe with us. There's no need to worry about tenant management, repairs or void periods as we handle everything for you.",
    icon: Shield
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-tyger-gray">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tyger-blue mb-4">How it works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've made it a breeze to get started working with Tyger Housing and enjoy guaranteed rent for at least three years. Here's how it works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 flex items-center justify-center mb-6 bg-tyger-gray/20 rounded-lg p-4">
                <step.icon className="h-20 w-20 text-purple-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
