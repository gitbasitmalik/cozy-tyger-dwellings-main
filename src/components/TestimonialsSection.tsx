
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Andrew L",
    location: "Camden, London",
    rating: 5,
    quote: "Tyger Housing has exceeded my expectations. They are professional, responsive, and have made the entire process so easy. I have been with Tyger Housing for two years now and wouldn't consider going to anyone else."
  },
  {
    name: "Andrew L",
    location: "Camden, London",
    rating: 5,
    quote: "Tyger Housing has exceeded my expectations. They are professional, responsive, and have made the entire process so easy. I have been with Tyger Housing for two years now and wouldn't consider going to anyone else."
  },
  {
    name: "Michelle K",
    location: "Hackney, East London",
    rating: 5,
    quote: "I was worried that Tyger Housing wouldn't live up to their promises, but they've exceeded all my expectations. Their team is knowledgeable, reliable, and responsive to all my requests. I'm grateful for their professionalism and attention to detail."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tyger-blue mb-4">What our clients say</h2>
          <h3 className="text-xl font-semibold text-gray-700">Our latest success stories</h3>
        </div>

        <div className="flex flex-col   md:flex-row gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-full md:w-1/2 border bg-purple-900  border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center  mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-tyger-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white ">Landlord in {testimonial.location}</p>
                </div>
                <p className="text-white italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
