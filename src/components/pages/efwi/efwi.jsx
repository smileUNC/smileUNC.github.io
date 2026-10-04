import { Routes, Route } from "react-router";
import { InlineMath } from "../../Math";
import SubNav from "../../SubNav";
import EFWIHome from "./efwi.home";
import EFWIBenchmarks from "./efwi.benchmarks";
import EFWIDatasets from "./efwi.datasets";
import EFWICode from "./efwi.code";
import EFWICitation from "./efwi.citation";
import NotFound from "../NotFound";

const TABS = [
  { label: "Overview", to: "/projects/efwi", end: true },
  { label: "Datasets", to: "/projects/efwi/datasets" },
  { label: "Benchmarks", to: "/projects/efwi/benchmarks" },
  { label: "Code", to: "/projects/efwi/code" },
];

export default function EFWI() {
  return (
    <>
      <SubNav title={<InlineMath math={"\\mathbb{E}^{FWI}"} />} items={TABS} />
      <Routes>
        <Route index element={<EFWIHome />} />
        <Route path="datasets" element={<EFWIDatasets />} />
        <Route path="benchmarks" element={<EFWIBenchmarks />} />
        <Route path="code" element={<EFWICode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <EFWICitation />
    </>
  );
}
