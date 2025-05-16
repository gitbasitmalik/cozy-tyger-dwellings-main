import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-tyger-gray text-purple-900">
      <div className="container bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-900">
              Just a few details are all we need to calculate your rental offer.
            </h2>
            <p className="text-purple-900">
              You can also use this form to request more information about our
              services.
            </p>
          </div>

          <form
            action="https://formsubmit.co/mbasit467@gmail.com"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <Input
                name="name"
                placeholder="Your name"
                required
                className="bg-white/10 border-purple/20 text-purple-900 placeholder:text-purple-900"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="bg-white/10 border-purple/20 text-purple-900 placeholder:text-purple-900"
              />
            </div>
            <div>
              <Input
                name="tel"
                type="tel"
                placeholder="Your Phone Number"
                className="bg-white/10 border-purple/20 text-purple-900 placeholder:text-purple-900"
              />
            </div>
            <div>
              <Input
                name="postcode"
                placeholder="Property postcode"
                className="bg-white/10 border-purple/20 text-purple-900 placeholder:text-purple-900"
              />
            </div>

            <div>
              <Input
                name="bedrooms"
                placeholder="Number of bedrooms"
                className="bg-white/10 border-purple/20 text-purple-900 placeholder:text-purple-900"
              />
            </div>
            <div>
              <select
                name="ownership"
                className="bg-white/10 border-purple/20 text-purple-900 focus:ring-2 focus:ring-primary"
                required
              >
                <option value="" disabled selected>
                  Do you own this property?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2">
              <Textarea
                name="message"
                placeholder="Further info about your property (optional)"
                required
                className="bg-white/10 border-purple/20 text-purple-900 placeholder:text-purple-900 h-32"
              />
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {/* Optional redirect after submission */}
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-tyger-yellow hover:bg-tyger-yellow/90 text-purple-900 font-medium px-8 py-2 h-12 rounded-full w-full md:w-auto"
              >
                Send message
              </Button>
              <input
                type="hidden"
                name="_next"
                value="http://localhost:8080/"
              />
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-purple-900 mb-2">Or contact us directly:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@tygerhousing.co.uk"
                className="hover:text-tyger-yellow"
              >
                info@tygerhousing.co.uk
              </a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+44 (0) 1332 480 318" className="hover:text-tyger-yellow">
              +44 (0) 1332 480 318
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
