import React from "react";
import { InlineMath } from "react-katex";
import "../../Table.css";

export default function EFWIDatasets() {
  return (
    <div className="table-container">
      <body class="dataset">
        <h2>
          {" "}
          <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> Datasets
        </h2>

        <div>
          <h3> Vel Family</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>#Training</th>
                  <th>#Validation</th>
                  <th>Input shape</th>
                  <th>Output shape</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      target="_blank"
                      href="https://drive.google.com/drive/folders/18gYoLzsuXxsLo_sbK7laV0KGYtfSewIy?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      <InlineMath>{"\\mathbb{E}^{FVA}"}</InlineMath>
                    </a>
                  </td>
                  <td> 123GB</td>
                  <td>24K</td>
                  <td>6K</td>
                  <td>(5,1000,70)</td>
                  <td>(1,70,70)</td>
                  <td>Simple situation with flat layers</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a
                      target="_blank"
                      href="https://drive.google.com/drive/folders/1fE7yxlvFjnvI_rmQBTcI0-RbNPLPGoDI?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      <InlineMath>{"\\mathbb{E}^{FVB}"}</InlineMath>
                    </a>
                  </td>
                  <td> 123GB</td>
                  <td>24K</td>
                  <td>6K</td>
                  <td>(5,1000,70)</td>
                  <td>(1,70,70)</td>
                  <td>
                    Difficult version of{" "}
                    <InlineMath>{"\\mathbb{E}^{FVA}"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a
                      target="_blank"
                      href="https://drive.google.com/drive/folders/1ce3d88vyRa1XB6jTdyL_RTV0A_X5GS1b?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      <InlineMath>{"\\mathbb{E}^{CVA}"}</InlineMath>
                    </a>
                  </td>
                  <td> 123GB</td>
                  <td>24K</td>
                  <td>6K</td>
                  <td>(5,1000,70)</td>
                  <td>(1,70,70)</td>
                  <td>Simple situation with curved layers</td>
                </tr>

                <tr>
                  <td>
                    <a
                      target="_blank"
                      href="https://drive.google.com/drive/folders/1neb0SU478bpxQOF6S5paVYnHoEI6e3P5?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      <InlineMath>{"\\mathbb{E}^{CVB}"}</InlineMath>
                    </a>
                  </td>
                  <td> 123GB</td>
                  <td>24K</td>
                  <td>6K</td>
                  <td>(5,1000,70)</td>
                  <td>(1,70,70)</td>
                  <td>
                    Difficult version of{" "}
                    <InlineMath>{"\\mathbb{E}^{CVA}"}</InlineMath>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3> Vel Family</h3>
            <div class="table-wrapper">
              <table class="fl-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>#Training</th>
                    <th>#Validation</th>
                    <th>Input shape</th>
                    <th>Output shape</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1I0opNrZ-XScfYFk37P9BOr59RMKmuBJh?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        <InlineMath>{"\\mathbb{E}^{FFA}"}</InlineMath>
                      </a>
                    </td>
                    <td> 222GB</td>
                    <td>48K</td>
                    <td>6K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>Flat layers with one fault</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1qX1e2bkTpaTexOyCFqaZNVCg2ghyBEJe?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        <InlineMath>{"\\mathbb{E}^{FFB}"}</InlineMath>
                      </a>
                    </td>
                    <td> 222GB</td>
                    <td>48K</td>
                    <td>6K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>
                      Difficult version of{" "}
                      <InlineMath>{"\\mathbb{E}^{FFA}"}</InlineMath>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1epsIb6QLHcd5UOLTaTEGh3trECFNim9O?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        <InlineMath>{"\\mathbb{E}^{CFA}"}</InlineMath>
                      </a>
                    </td>
                    <td> 222GB</td>
                    <td>48K</td>
                    <td>6K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>Curve layers with one fault</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1GOX2sLHVNgaFZ8QtBuLUYioz33kzbjl2?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        <InlineMath>{"\\mathbb{E}^{CFB}"}</InlineMath>
                      </a>
                    </td>
                    <td> 222GB</td>
                    <td>48K</td>
                    <td>6K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>
                      Difficult version of{" "}
                      <InlineMath>{"\\mathbb{E}^{CFA}"}</InlineMath>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
