import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative bg-black bg-grid-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5">
        <Navbar />
        <Hero />
        <Skill />
        <Project />
        <Footer />
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute -top-5 left-0 xl:top-0 w-full"></div>
    </div>
  );
}
