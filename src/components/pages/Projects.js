import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "../Cards";
import EFWI from "./efwi/efwi";
import OpenFWI from "./openfwi/open";
import Footer from "../Footer";

export default function Projects() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/efwi/*" element={<EFWI />} />
        <Route path="/openfwi/*" element={<OpenFWI />} />
      </Routes>
      <Footer />
    </>
  );
}
