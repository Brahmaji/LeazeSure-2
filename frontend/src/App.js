import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";
import RentalPassport from "./components/RentalPassport";
import RentReporting from "./components/RentReporting";
import LandlordDashboard from "./components/LandlordDashboard";
import PricingSection from "./components/PricingSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSolution />
        <RentalPassport />
        <RentReporting />
        <LandlordDashboard />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
