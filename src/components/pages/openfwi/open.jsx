import { Routes, Route } from "react-router";
import SubNav from "../../SubNav";
import OpenFWIHome from "./open.home";
import OpenFWIBenchmarks from "./ofwi.benchmarks";
import OpenFWIDatasets from "./ofwi.datasets";
import OpenFWIResources from "./ofwi.resources";
import OpenFWICitation from "./openfwi.citation";
import NotFound from "../NotFound";

const TABS = [
  { label: "Overview", to: "/projects/openfwi", end: true },
  { label: "Datasets", to: "/projects/openfwi/datasets" },
  { label: "Benchmarks", to: "/projects/openfwi/benchmarks" },
  { label: "Resources", to: "/projects/openfwi/resources" },
];

// OpenFWI section. Tables and links are data-driven: see src/data/openfwi.js.
export default function OpenFWI() {
  return (
    <>
      <SubNav title="OpenFWI" items={TABS} />
      <Routes>
        <Route index element={<OpenFWIHome />} />
        <Route path="datasets" element={<OpenFWIDatasets />} />
        <Route path="benchmarks" element={<OpenFWIBenchmarks />} />
        <Route path="resources" element={<OpenFWIResources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <OpenFWICitation />
    </>
  );
}
