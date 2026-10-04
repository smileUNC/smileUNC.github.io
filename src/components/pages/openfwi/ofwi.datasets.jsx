import { DataTable } from "../../common";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import { datasetFamilies, datasetLicense } from "../../../data/openfwi";
import "./openfwi.css";

// Dataset tables come from src/data/openfwi.js.
export default function OpenFWIDatasets() {
  useDocumentTitle("OpenFWI Datasets");
  const columns = ["Name", "Size", "#Training", "#Validation", "Input shape", "Output shape", "Note"];
  return (
    <div className="container openfwi-page">
      <h1 className="openfwi-title">OpenFWI Datasets</h1>
      <p className="openfwi-lead">
        Click a dataset name to download it. This work is licensed under a{" "}
        <a href={datasetLicense.href} target="_blank" rel="noopener noreferrer">
          {datasetLicense.label}
        </a>
        .
      </p>
      {datasetFamilies.map((f) => (
        <section key={f.family} className="bench-section">
          <div className="bench-head">
            <h2>{f.family}</h2>
          </div>
          <DataTable
            columns={columns}
            wrapColumns={[6]}
            rows={f.items.map((d) => [
              { text: d.name, href: d.href },
              d.size,
              d.train,
              d.val,
              d.input,
              d.output,
              d.note,
            ])}
          />
        </section>
      ))}
    </div>
  );
}
