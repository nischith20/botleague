import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competitions from "./components/Competitions";
import Journey from "./components/Journey";
import WhatIs from "./components/WhatIs";
import Categories from "./components/Categories";
import Disciplines from "./components/Disciplines";
import WhyRegisterSection from "./components/WhyRegisterSection";
import JoinEcosystem from "./components/JoinEcosystem";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import RoleSelect from "./pages/RoleSelect";
import RoleAuth from "./pages/RoleAuth";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

function LandingPage() {
  return (
    <>
      <Hero />
      <Competitions />
      <Journey />
      <WhatIs />
      <Categories />
      <Disciplines />
      <WhyRegisterSection />
      <JoinEcosystem />
      <Sponsors />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-black min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<RoleSelect />} />
            <Route path="/:role/register" element={<RoleAuth />} />
            <Route path="/:role/login" element={<RoleAuth />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
