import React from "react";
import { Routes, Route } from "react-router-dom";

import OpenFWINav from "./open.nav";
import OpenFWIHome from "./open.home";
import OpenFWIBenchmarks from "./ofwi.benchmarks";
import OpenFWIDatasets from "./ofwi.datasets";
import OpenFWIResources from "./ofwi.resources";
import OpenFWICitation from "./openfwi.citation";

export default function OpenFWI() {
  return (
    <div>
      <OpenFWINav />
      <Routes>
        <Route path="/" element={<OpenFWIHome />} />
        <Route path="/datasets" element={<OpenFWIDatasets />} />
        <Route path="/benchmarks" element={<OpenFWIBenchmarks />} />
        <Route path="/resources" element={<OpenFWIResources />} />
      </Routes>
      <OpenFWICitation />
    </div>
  );
}
