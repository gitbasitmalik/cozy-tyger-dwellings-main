import { Button } from "@/components/ui/button";
import { CheckCircle, PoundSterling, Clock, Calendar, Ban, CheckCircle2, ClipboardCheck, HandshakeIcon, Shield, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function GuaranteedRent() {
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
  return (
    <div>
      {/* First Section */}
      <section className="bg-white text-gray-900 p-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Illustration or Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-yellow-100 rounded-full">
            <Home className="w-16 h-16 text-yellow-500" /> {/* Use an icon or SVG */}
          </div>
        </div>

        {/* Heading and Description */}
        <h2 className="text-3xl font-bold text-blue-900">Guaranteed Rent</h2>
        <p className="text-gray-600 mt-3">
          Maximise your rental income and reduce your landlord workload with a
          fee-free property management service, and enjoy guaranteed rent every
          month for the duration of your agreement, even if your property is
          untenanted.
        </p>
        <Link to="/contact" className="inline-block">
          <Button className="bg-yellow-500 text-white px-6 py-3 mt-4">
            Get In Touch
          </Button>
        </Link>
      </div>

        {/* Icons and Illustrations Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8">
          <FeatureCard
            icon={<PoundSterling className="w-10 h-10 text-yellow-400" />}
            title="No more late payments"
            description="Your rent paid the same day each month by standing order."
          />
          <FeatureCard
            icon={<CheckCircle className="w-10 h-10 text-yellow-400" />}
            title="Cashflow certainty"
            description="You'll always know what you've got coming in, and when."
          />
          <FeatureCard
            icon={<CheckCircle className="w-10 h-10 text-yellow-400" />}
            title="Voids a thing of the past"
            description="Rental payments continue, even during void periods."
          />
        </div>
      </section>

      {/* Second Section */}
      <section className="py-12 bg-purple-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-4">
              <div className="rounded-full bg-white p-3">
                <Clock className="h-8 w-8 text-purple-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">48 Hours</h3>
                <p className="text-sm mt-1">
                  It all it takes to start the process towards a guaranteed rental payment
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4">
              <div className="rounded-full bg-white p-3">
                <Calendar className="h-8 w-8 text-purple-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">3 Years</h3>
                <p className="text-sm mt-1">
                  Fully managed, hassle-free service for as long as you need it
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4">
              <div className="rounded-full bg-white p-3">
                <Ban className="h-8 w-8 text-purple-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">0 Fees</h3>
                <p className="text-sm mt-1">
                  No management fees, no hidden costs, and no void periods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Third Section */}
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
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
      <h3 className="text-lg font-semibold mt-3 text-blue-900">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
}