import React from "react";
import Cards from "../Cards";

import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import EFWI from "./efwi/efwi";
import OpenFWI from "./openfwi/open";

export default function Projects() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/efwi/*" element={<EFWI />} />
        <Route path="/openfwi/*" element={<OpenFWI />} />
      </Routes>
      <Footer />
    </div>
  );
}
