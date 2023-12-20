import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Publications from "./components/pages/Publications";
import Hiring from "./components/pages/Hiring";
import Blog from "./components/pages/Blog";
import Updates from "./components/pages/Updates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
