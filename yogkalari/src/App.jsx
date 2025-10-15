import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import YogaFooter from "./components/YogaFooter";

// Import pages
import MainPage from "./pages/yoga-page/MainPage";
import KalariPage from "./pages/kalari-page/MainPage";
import HomePage from "./pages/main-page/MainPage";
import TerrariumsPage from "./pages/terrarium-page/MainPage";
import ContactForm from "./pages/contact-form/Contact";
import ScrollUp from "./components/ScrollUp";
import ProductDetails from "./pages/terrarium-page/ProductDetails";
import Maintenance from "./components/Maintenance";
import Admin from "./pages/admin/Admin";

const App = () => {
  const launchDate = new Date("2025-10-02T07:30:00").getTime();
  const [now, setNow] = useState(new Date().getTime());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // update "now" every second
    const timer = setInterval(() => {
      setNow(new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // fake loading splash for 2s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 h-24 animate-scale-up"
        />
      </div>
    );
  }
  if (now < launchDate) {
    return <Maintenance launchDate={launchDate} />;
  }

  return (
    <Router>
      <ScrollUp />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kalari" element={<KalariPage />} />
        <Route path="/yoga" element={<MainPage />} />
        <Route path="/terrariums" element={<TerrariumsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold w-full text-center pt-50 pb-100 text-[#084C2E] ">
              404 Not Found
            </h1>
          }
        />

        <Route path="/contact" element={<ContactForm />} />
        <Route path="/adminpanel" element={<Admin />} />
      </Routes>
      <YogaFooter />
    </Router>
  );
};

export default App;
