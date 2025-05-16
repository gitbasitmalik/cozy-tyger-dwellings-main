// src/components/Layout.tsx
import React from 'react';
import Header from './Header'; // Adjust the import path as needed
import Footer from './Footer'; // Adjust the import path as needed

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;