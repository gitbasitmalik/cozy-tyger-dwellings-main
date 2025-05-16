import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, UserCheck, ClipboardCheck, Ban, Calendar, Clock, CheckCircle2, HandshakeIcon, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandLords() {
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
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Guaranteed Rent for Landlords</h1>
        <p className="text-gray-600">
          Our guaranteed rent for landlords service offers complete protection
          when letting your property, backed by an exclusive service promise.
          As a private landlord, you can be certain your investment will be in
          the safest hands.
        </p>
        <Link to="/contact" className="inline-block">
          <Button className="bg-yellow-500 text-white px-6 py-3 mt-4">
            Free Valuation
          </Button>
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Why choose City Borough Housing rent guarantee for landlords?
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Your property is your most valuable asset, and as experienced property
          professionals, we know how to take care of it. From dealing swiftly
          with tenant queries to organizing quality inspections, we've got
          everything covered.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="p-6 text-center">
          <Home className="text-yellow-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-bold">Local Market & Industry Knowledge</h3>
          <CardContent className="text-gray-600">
            Our industry expertise allows landlords to enjoy excellent yields
            and maximized rental income.
          </CardContent>
        </Card>

        <Card className="p-6 text-center">
          <UserCheck className="text-yellow-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-bold">Exclusive Service Promise</h3>
          <CardContent className="text-gray-600">
            Our friendly team is focused on providing a customer-centric service,
            taking care of you and your property from day one.
          </CardContent>
        </Card>

        <Card className="p-6 text-center">
          <ClipboardCheck className="text-yellow-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-bold">Fee-Free Property Management</h3>
          <CardContent className="text-gray-600">
            From sourcing tenants to regular inspections and maintenance,
            everything is included.
          </CardContent>
        </Card>
      </div>
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