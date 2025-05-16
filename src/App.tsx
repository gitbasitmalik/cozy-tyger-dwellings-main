
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GuaranteedRent from "./pages/GuaranteedRent";
import Layout from "./components/Layout";
import LandLords from "./pages/LandLords";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/guaranteed-rent" element={<Layout><GuaranteedRent /></Layout>} />
          <Route path="/landlords" element={<Layout><LandLords /></Layout>} />
          <Route path="/contact" element={<Layout><ContactUs/></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
