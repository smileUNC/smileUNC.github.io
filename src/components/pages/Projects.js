import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import EFWI from "./efwi/efwi";
import OpenFWI from "./openfwi/open";
import EdgeInversionNet from "./projects/edge_inversionnet";
import QuGeo from "./projects/qugeo";
import InversionNet from "./projects/inversionnet";
import VelocityGAN from "./projects/velocitygan";

export default function Projects() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/efwi/*" element={<EFWI />} />
        <Route path="/openfwi/*" element={<OpenFWI />} />
        <Route path="/edge_inversionnet" element={<EdgeInversionNet />} />
        <Route path="/qugeo" element={<QuGeo />} />
        <Route path="/inversion_net" element={<InversionNet />} />
        <Route path="/velocity_gan" element={<VelocityGAN />} />
      </Routes>
      <Footer />
    </div>
  );
}
