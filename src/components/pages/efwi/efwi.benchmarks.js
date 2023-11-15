import React from "react";
import { InlineMath } from "react-katex";
import "../../Table.css";

export default function EFWIBenchmarks() {
  return (
    <div className="table-container">
      <body class="benchmark">
        <h2>
          {" "}
          <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> Benchmarks
        </h2>
        <div>
          <h3>Benchmark by ElasticNet (SSIM)</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Loss Function</th>
                  <th>V_P</th>
                  <th>V_S </th>
                  <th>Poisson ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FVA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8993 \\backslash 0.9051"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8757 \\backslash 0.9030"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7493 \\backslash 0.7402"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CVA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7577 \\backslash 0.7849"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7635 \\backslash 0.7878"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6484 \\backslash 0.6378"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FVB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8149 \\backslash 0.8197"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8203 \\backslash 0.8266"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6741 \\backslash 0.6321"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CVB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6091 \\backslash 0.6173"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6434 \\backslash 0.6506"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.5111 \\backslash 0.4957"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FFA}"}</InlineMath>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8933 \\backslash 0.8928"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8609 \\backslash 0.8591"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7296 \\backslash 0.7307"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CFA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7263 \\backslash 0.7234"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7358 \\backslash 0.7382"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6842 \\backslash 0.6686"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FFB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6858 \\backslash 0.6815"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7225 \\backslash 0.7216"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.5987 \\backslash 0.5801"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CFB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.5613 \\backslash 0.5744"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6103 \\backslash 0.6242"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.5077 \\backslash 0.4945"}</InlineMath>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3>Benchmark by ElasticGAN (SSIM)</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Loss Function</th>
                  <th>V_P</th>
                  <th>V_S </th>
                  <th>Poisson ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FVA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0118 \\backslash 0.0605"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0178 \\backslash 0.0783"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9916 \\backslash 0.9453"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{CVA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0482 \\backslash 0.0510"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1034 \\backslash 0.0976"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8624 \\backslash 0.8758"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{FVB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0329 \\backslash 0.0328"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0807 \\backslash 0.0787"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9521 \\backslash 0.9556"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CVB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1268 \\backslash 0.1428"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.2618 \\backslash 0.2611"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7111 \\backslash 0.6962"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FFA}"}</InlineMath>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0868 \\backslash 0.0319"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1485 \\backslash 0.0531"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9313 \\backslash 0.9798"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CFA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0258 \\backslash 0.0216"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0606 \\backslash 0.0505"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9613 \\backslash 0.9687"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FFB}"}</InlineMath>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0925 \\backslash 0.0946"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1600 \\backslash 0.1553"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7476 \\backslash 0.7552"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CFB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1571 \\backslash 0.1583"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.2427 \\backslash 0.2336"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.5996 \\backslash 0.6033"}</InlineMath>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3>Benchmark by ElasticTransformer (SSIM)</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Loss Function</th>
                  <th>V_P</th>
                  <th>V_S </th>
                  <th>Poisson ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FVA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0320</td>
                  <td style={{ textAlign: "center" }}>0.0632</td>
                  <td style={{ textAlign: "center" }}>0.9563</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{CVA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0353</td>
                  <td style={{ textAlign: "center" }}>0.0771</td>
                  <td style={{ textAlign: "center" }}>0.8866 </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{FVB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0409</td>
                  <td style={{ textAlign: "center" }}>0.0715</td>
                  <td style={{ textAlign: "center" }}>0.8435</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CVB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0886 </td>
                  <td style={{ textAlign: "center" }}>0.1587 </td>
                  <td style={{ textAlign: "center" }}>0.6617</td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FFA}"}</InlineMath>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}> 0.0324 </td>
                  <td style={{ textAlign: "center" }}> 0.0752 </td>
                  <td style={{ textAlign: "center" }}> 0.9487 </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{CFA}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}> 0.0709 </td>
                  <td style={{ textAlign: "center" }}> 0.1102 </td>
                  <td style={{ textAlign: "center" }}> 0.6772 </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\mathbb{E}^{FFB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}> 0.0273 </td>
                  <td style={{ textAlign: "center" }}> 0.0495 </td>
                  <td style={{ textAlign: "center" }}> 0.9363 </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\mathbb{E}^{FFB}"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}> 0.1699 </td>
                  <td style={{ textAlign: "center" }}> 0.2462 </td>
                  <td style={{ textAlign: "center" }}> 0.3880 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </div>
  );
}
