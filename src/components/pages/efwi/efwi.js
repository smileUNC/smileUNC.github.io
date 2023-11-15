import React from "react";
import "../../../App.css";

import EFWIHome from "./efwi.home";
import EFWIBenchmarks from "./efwi.benchmarks";
import EFWIDatasets from "./efwi.datasets";
import EFWICode from "./efwi.code";
import EFWINav from "./efwi.nav";
import EFWICitation from "./efwi.citation";
import { Routes, Route } from "react-router-dom";

export default function EFWI() {
  return (
    <div>
      <EFWINav />
      <Routes>
        <Route path="/" element={<EFWIHome />} />
        <Route path="/datasets" element={<EFWIDatasets />} />
        <Route path="/benchmarks" element={<EFWIBenchmarks />} />
        <Route path="/code" element={<EFWICode />} />
      </Routes>
      <EFWICitation />
    </div>
  );
}
