
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 w-full h-16 bg-purple-900 text-white border-b z-50 shadow-md flex items-center">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-tyger-yellow">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L62.5 25H37.5L50 0Z" fill="currentColor" />
              <path d="M75 37.5L100 50L75 62.5V37.5Z" fill="currentColor" />
              <path d="M62.5 75H37.5L50 100L62.5 75Z" fill="currentColor" />
              <path d="M25 37.5V62.5L0 50L25 37.5Z" fill="currentColor" />
              <circle cx="50" cy="50" r="25" fill="currentColor" />
            </svg>
          </div>
          <div className="font-bold text-xl">
            <span className="text-tyger-yellow">Tyger</span> Housing
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-tyger-blue font-medium">About Us</Link>
          <Link to="/guaranteed-rent" className="hover:text-tyger-blue font-medium">Guaranteed Rent</Link>
          <Link to="/landlords" className="hover:text-tyger-blue font-medium">Landlords</Link>
          <Link to="/contact" className="hover:text-tyger-blue font-medium">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+44 (0) 1332 480 318" className="hidden md:flex items-center text-white font-medium">
            <Phone className="h-4 w-4 mr-2" />
            +44 (0) 1332 480 318
          </a>
          <Link to="/contact">
            <Button className="bg-tyger-yellow hover:bg-tyger-yellow/90 text-tyger-blue font-medium">
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

