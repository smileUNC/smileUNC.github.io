import React from "react";
import "../../Table.css";

export default function OpenFWIDatasets() {
  return (
    <div className="table-container">
      <body class="dataset">
        <h2> OpenFWI Datasets</h2>
        <h3>
          This work is licensed under a{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License.
          </a>
        </h3>

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
                      href="https://drive.google.com/drive/folders/1NIdjiYhjWSV9NHn7ZEFYTpJxzvzxqYRb?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      FlatVel-A
                    </a>
                  </td>
                  <td> 43GB</td>
                  <td>24K</td>
                  <td>6K</td>
                  <td>(5,1000,70)</td>
                  <td>(1,70,70)</td>
                  <td>imple situation with flat layers</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a
                      target="_blank"
                      href="https://drive.google.com/drive/folders/1XnQjke4vG8DpHvfpoCIKQaG0D7Jsi_8O?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      FlatVel-B
                    </a>
                  </td>
                  <td> 43GB</td>
                  <td>24K</td>
                  <td>6K</td>
                  <td>(5,1000,70)</td>
                  <td>(1,70,70)</td>
                  <td>Difficult version of FlatVel-A</td>
                </tr>

                <tr>
                  <td>
                    <a
                      target="_blank"
                      href="https://drive.google.com/drive/folders/1NGXnVG0gUFHfDcUvJxfozCgiI4WwquVk?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      CurveVel-A
                    </a>
                  </td>
                  <td> 43GB</td>
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
                      href="https://drive.google.com/drive/folders/1d1N6DIISC0fBMwPxnOYOhFP3p2ZtCPmf?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      CurveVel-B
                    </a>
                  </td>
                  <td> 43GB</td>
                  <td>24K</td>
                  <td>6K</td>
                  <td>(5,1000,70)</td>
                  <td>(1,70,70)</td>
                  <td>Difficult version of CurveVel-A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3> Fault Family</h3>
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
                        href="https://drive.google.com/drive/folders/1jOB6R_zewuFj5wZam7nDP7GixQnbnRLR?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        FlatFault-A
                      </a>
                    </td>
                    <td> 77GB</td>
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
                        href="https://drive.google.com/drive/folders/1mfu5DCMTiEzrYoXbMfq9ILAM0RJ2SqNX?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        FlatFault-B
                      </a>
                    </td>
                    <td> 77GB</td>
                    <td>48K</td>
                    <td>6K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>Difficult version of FlatFault-A</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1vqUHJ-iRwp3ozL-e4HhKGpdO0e7NQZE1?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        CurveFault-A
                      </a>
                    </td>
                    <td> 77GB</td>
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
                        href="https://drive.google.com/drive/folders/1QTDno4_qed94mqhxJRzqWC19iYfANRqD?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        CurveFault-B
                      </a>
                    </td>
                    <td> 77GB</td>
                    <td>48K</td>
                    <td>6K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>Difficult version of CurveFault-A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3> Style Family</h3>
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
                        href="https://drive.google.com/drive/folders/1CQceUL5ITTHV-PRqbIzkyZwCDdUk0XkU?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        Style-A
                      </a>
                    </td>
                    <td> 95GB</td>
                    <td>60K</td>
                    <td>7K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>Obtained via style transfer from natural images</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1JbyhbEq8TIrJbH-FZJje9WOejktE0f0Y?usp=sharing"
                        rel="noopener noreferrer"
                      >
                        Style-B
                      </a>
                    </td>
                    <td> 95GB</td>
                    <td>60K</td>
                    <td>7K</td>
                    <td>(5,1000,70)</td>
                    <td>(1,70,70)</td>
                    <td>Difficult version of Style-A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3> Kimberlina Family</h3>
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
                        href="https://edx.netl.doe.gov/dataset/kimberlina-1-2-velocity-models"
                        rel="noopener noreferrer"
                      >
                        Kimberlina-CO2
                      </a>
                    </td>
                    <td> 96GB</td>
                    <td>15K</td>
                    <td>4430</td>
                    <td>(9,1251,101)</td>
                    <td>(1,401,141)</td>
                    <td>Simulated from CO2 leakage reservoir</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        target="_blank"
                        href="https://edx.netl.doe.gov/group/kimberlina-geophysical-data"
                        rel="noopener noreferrer"
                      >
                        3D Kimberlina-V1
                      </a>
                    </td>
                    <td> 1.4TB</td>
                    <td>1664</td>
                    <td>163</td>
                    <td>(25,5001,40,40)</td>
                    <td>(1,350,400,400)</td>
                    <td>3D data</td>
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
