import React from "react";
import { InlineMath } from "react-katex";
import "../../Table.css";

export default function OpenFWIBenchmarks() {
  return (
    <div className="table-container">
      <body class="benchmark">
        <h2> OpenFWI Benchmarks</h2>
        <div>
          <h3>2D Benchmark by InversionNet</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Loss Function</th>
                  <th>MAE</th>
                  <th>RMSE </th>
                  <th>SSIM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatVel-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0131 \\backslash 0.0131"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0211\\backslash 0.0180"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9895 \\backslash 0.9887"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatVel-B</td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0351 \\backslash 0.0417"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0876 \\backslash 0.0909"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9461 \\backslash 0.9402"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>CurveVel-A</td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0685 \\backslash 0.0690"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1273 \\backslash 0.1202"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8074 \\backslash 0.8223"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>CurveVel-B</td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1497 \\backslash 0.1624"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.2891 \\backslash 0.2801"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6727 \\backslash 0.6661"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>FlatFault-A</td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{" 0.0172 \\backslash 0.0174"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0426 \\backslash  0.0362"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9766 \\backslash 0.9798"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatFault-B</td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1055 \\backslash 0.1106"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1741 \\backslash 0.1723"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.7208 \\backslash 0.7186"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>CurveFault-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0260 \\backslash 0.0280"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0650 \\backslash 0.0602"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9566 \\backslash 0.9592"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>CurveFault-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1646 \\backslash 0.1669"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.2477 \\backslash 0.2412"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6163 \\backslash 0.6053"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>Style-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0625 \\backslash 0.0610"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1024 \\backslash 0.0989"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8859 \\backslash 0.8910"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>Style-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0689 \\backslash 0.0586"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1614 \\backslash 0.0893"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6314 \\backslash 0.7599"}</InlineMath>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3>2D Benchmark by VelocityGAN</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Loss Function</th>

                  <th>MAE</th>
                  <th>RMSE </th>
                  <th>SSIM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FlatVel-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{" 0.0118 \\backslash 0.0605"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0178 \\backslash 0.0783"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9916 \\backslash 0.9453"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatVel-B</td>
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
                  <td style={{ textAlign: "center" }}>CurveVel-A</td>
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
                  <td style={{ textAlign: "center" }}>CurveVel-B</td>
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
                  <td style={{ textAlign: "center" }}>FlatFault-A</td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{" 0.0868 \\backslash 0.0319"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1485 \\backslash 0.0531"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9313 \\backslash 0.9798"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatFault-B</td>
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
                  <td style={{ textAlign: "center" }}>CurveFault-A</td>
                  <td style={{ textAlign: "center" }}>
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
                  <td style={{ textAlign: "center" }}>CurveFault-B</td>
                  <td style={{ textAlign: "center" }}>
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

                <tr>
                  <td style={{ textAlign: "center" }}>Style-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0612 \\backslash 0.0645"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1000 \\backslash 0.1025"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.8883 \\backslash 0.8882"}</InlineMath>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>Style-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0697 \\backslash 0.0649"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.1108 \\backslash 0.0979"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.6953 \\backslash 0.7249"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>Kimberlina-CO2</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0122 \\backslash 0.0119"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0574 \\backslash 0.0387"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9716 \\backslash 0.9527"}</InlineMath>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3>2D Benchmark by UPFWI</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Loss Function</th>
                  <th>MAE</th>
                  <th>RMSE </th>
                  <th>SSIM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatVel-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0621</td>
                  <td style={{ textAlign: "center" }}>0.1233</td>
                  <td style={{ textAlign: "center" }}>0.9563</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatVel-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0677</td>
                  <td style={{ textAlign: "center" }}>0.1493</td>
                  <td style={{ textAlign: "center" }}>0.8874</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>CurveVel-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0805</td>
                  <td style={{ textAlign: "center" }}>0.1411</td>
                  <td style={{ textAlign: "center" }}>0.8443</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>CurveVel-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.1777</td>
                  <td style={{ textAlign: "center" }}>0.3179</td>
                  <td style={{ textAlign: "center" }}>0.6614</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatFault-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0876</td>
                  <td style={{ textAlign: "center" }}>0.2060</td>
                  <td style={{ textAlign: "center" }}>0.9340</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>FlatFault-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.1416</td>
                  <td style={{ textAlign: "center" }}>0.2220</td>
                  <td style={{ textAlign: "center" }}>0.6937</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>CurveFault-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.0500</td>
                  <td style={{ textAlign: "center" }}>0.0966</td>
                  <td style={{ textAlign: "center" }}>0.9495</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>CurveFault-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.3452</td>
                  <td style={{ textAlign: "center" }}>0.5010</td>
                  <td style={{ textAlign: "center" }}>0.3941</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>Style-A</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.1429</td>
                  <td style={{ textAlign: "center" }}>0.2342</td>
                  <td style={{ textAlign: "center" }}>0.7846</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>Style-B</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>
                      {"\\ell_1 + \\ell_2 + \\ell_{perceptual}"}
                    </InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>0.1702</td>
                  <td style={{ textAlign: "center" }}>0.2609</td>
                  <td style={{ textAlign: "center" }}>0.6102</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3>3D Benchmark by InversionNet3D</h3>
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Loss Function</th>
                  <th>Selected Channels</th>
                  <th>MAE</th>
                  <th>RMSE </th>
                  <th>SSIM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>3D Kimberlina-V1</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    [1,2,14,15,16,20,23,24]
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0111 \\backslash 0.0156"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0295 \\backslash 0.0311"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9773 \\backslash 0.9438"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>3D Kimberlina-V1</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    [6,7,8,11,13,16,17,18]
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0108 \\backslash 0.0153"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0285 \\backslash 0.0306"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9776 \\backslash 0.9420"}</InlineMath>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>3D Kimberlina-V1</td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"\\ell_1 \\backslash \\ell_2"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    [0,2,4,10,14,20,22,24]
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0161 \\backslash 0.0111"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.0316 \\backslash 0.0290"}</InlineMath>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InlineMath>{"0.9356 \\backslash 0.9770"}</InlineMath>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </div>
  );
}
