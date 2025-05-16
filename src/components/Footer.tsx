
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-tyger-yellow">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L62.5 25H37.5L50 0Z" fill="currentColor" />
                  <path d="M75 37.5L100 50L75 62.5V37.5Z" fill="currentColor" />
                  <path d="M62.5 75H37.5L50 100L62.5 75Z" fill="currentColor" />
                  <path d="M25 37.5V62.5L0 50L25 37.5Z" fill="currentColor" />
                  <circle cx="50" cy="50" r="25" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-lg">
                <span className="text-tyger-yellow">Tyger</span> Housing
              </span>
            </div>
            <p className="text-sm">© 2023 Tyger Housing</p>
            <p className="text-sm">71-75 Shelton Street</p>
            <p className="text-sm">Covent Garden, London, WC2H 9JQ</p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/guaranteed-rent" className="text-sm hover:text-tyger-yellow">Guaranteed Rent</Link></li>
              <li><Link to="/landlords" className="text-sm hover:text-tyger-yellow">Landlords</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-tyger-yellow">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Support & Help</h3>
            <ul className="space-y-2">
              <li><Link to="/report-a-repair" className="text-sm hover:text-tyger-yellow">Report a Repair</Link></li>
              <li><Link to="/faqs" className="text-sm hover:text-tyger-yellow">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-sm hover:text-tyger-yellow">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-tyger-yellow" />
                <a href="tel:02037800316" className="text-sm hover:text-tyger-yellow">020 3780 0316</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-tyger-yellow" />
                <a href="mailto:info@tygerhousing.co.uk" className="text-sm hover:text-tyger-yellow">info@tygerhousing.co.uk</a>
              </div>
              <div className="pt-4">
                <p className="text-sm">Covent Garden, London, EC1V</p>
                <p className="text-sm">ARLA Propertymark Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
