import React from "react";
import "../../Content.css";

import "katex/dist/katex.min.css"; // import styles

export default function EdgeInversionNet() {
  return (
    <div className="content-container">
      <div className="content-heading-2">
        Edge-InversionNet: Enabling Efficient Inference of InversionNet on Edge
        Devices
      </div>
      <div className="content-title">Overview</div>
      <div className="content-text">
        We have applied a structured pruning algorithm to create a lightweight
        version of InversionNet, optimized for efficient inference on edge
        devices. Additionally, we have developed a Raspberry Pi prototype to
        demonstrate the feasibility of running the streamlined InversionNet. Our
        experimental results indicate that the pruned model requires up to 98.2%
        fewer computing resources, with only a moderate decrease in performance.
        (Via collaboration with{" "}
        <a href="https://jqub.github.io">Dr. Weiwen Jiang</a>
        .)
      </div>
      <div className="content-text">
        The full paper can be found on arxiv:
        <div>
          <a href="https://arxiv.org/abs/2310.09667">
            Edge-InversionNet: Enabling Efficient Inference of InversionNet on
            Edge Devices.
          </a>
        </div>
      </div>

      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/projects/edge.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
    </div>
  );
}
