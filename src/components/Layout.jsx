import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet /> {/* React Router renders the page here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
