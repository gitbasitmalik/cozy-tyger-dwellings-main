
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-tyger-gray py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-tyger-blue mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for. It might have been moved or deleted.
          </p>
          <Button asChild className="bg-tyger-yellow hover:bg-tyger-yellow/90 text-tyger-blue font-medium px-8">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
