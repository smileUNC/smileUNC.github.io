import { Routes, Route } from "react-router";
import { PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { ProjectGrid } from "../ProjectCard";
import { projects } from "../../data/projects";
import NotFound from "./NotFound";

import OpenFWI from "./openfwi/open";
import EFWI from "./efwi/efwi";
import FwiLargeModel from "./projects/fwi_large_model";
import OpenPros from "./projects/openpros";
import AutoLinear from "./projects/auto_linear";
import WsMgi from "./projects/ws_mgi";
import DeFault from "./projects/default";
import EdgeInversionNet from "./projects/edge_inversionnet";
import QuGeo from "./projects/qugeo";
import InversionNet from "./projects/inversionnet";
import VelocityGAN from "./projects/velocitygan";
import Upfwi from "./projects/upfwi";
import TaskedUSCT from "./projects/tasked_usct";
import Invlint from "./projects/invlint";

function ProjectsIndex() {
  useDocumentTitle("Projects");
  return (
    <>
      <PageHeader eyebrow="Research" title="Projects">
        Datasets, benchmarks and methods from the OmniWave Lab — from data-driven full waveform inversion to ultrasound
        computed tomography.
      </PageHeader>
      <section className="section">
        <div className="container">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}

// Routes under /projects. Add a line here when you create a new project page.
export default function Projects() {
  return (
    <Routes>
      <Route index element={<ProjectsIndex />} />
      <Route path="openfwi/*" element={<OpenFWI />} />
      <Route path="efwi/*" element={<EFWI />} />
      <Route path="fwi-large-model" element={<FwiLargeModel />} />
      <Route path="openpros" element={<OpenPros />} />
      <Route path="ws-mgi" element={<WsMgi />} />
      <Route path="default" element={<DeFault />} />
      <Route path="auto-linear" element={<AutoLinear />} />
      <Route path="edge_inversionnet" element={<EdgeInversionNet />} />
      <Route path="qugeo" element={<QuGeo />} />
      <Route path="inversion_net" element={<InversionNet />} />
      <Route path="velocity_gan" element={<VelocityGAN />} />
      <Route path="upfwi" element={<Upfwi />} />
      <Route path="tasked_usct" element={<TaskedUSCT />} />
      <Route path="invlint" element={<Invlint />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
