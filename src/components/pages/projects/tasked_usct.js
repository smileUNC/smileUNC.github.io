import React from "react";
import "../../Content.css";

export default function TaskedUSCT() {
  return (
    <div className="content-container">
      <div className="content-heading-2">
        Learned Full Waveform Inversion Incorporating Task Information for
        Ultrasound Computed Tomography
      </div>

      <div className="content-title">Highlight</div>
      <div className="content-text">
        The high computational cost of FWI reconstruction represents a
        significant burden for its widespread application in a clinical setting.
        The research reported here investigates the use of a convolutional
        neural network (CNN) to learn a mapping from USCT waveform data to speed
        of sound estimates. The CNN was trained using a supervised approach with
        a task-informed loss function aiming at preserving features of the image
        that are relevant to the detection of lesions. A large set of
        anatomically and physiologically realistic numerical breast phantoms
        (NBPs) and corresponding simulated USCT measurements was employed during
        training. Once trained, the CNN can perform real-time FWI image
        reconstruction from USCT waveform data. The performance of the proposed
        method was assessed and compared against FWI using a hold-out sample of
        41 NBPs and corresponding USCT data. Accuracy was measured using
        relative mean square error (RMSE), structural self-similarity index
        measure (SSIM), and lesion detection performance (DICE score). This
        numerical experiment demonstrates that a supervised learning model can
        achieve accuracy comparable to FWI in terms of RMSE and SSIM, and better
        performance in terms of task performance, while significantly reducing
        computational time.
      </div>
      <div className="content-text">
        The full paper can be found on arxiv:
        <div>
          <a href="https://arxiv.org/abs/2308.16290">
            Learned Full Waveform Inversion Incorporating Task Information for
            Ultrasound Computed Tomography
          </a>
        </div>
      </div>
      <div className="content-title">Ultrasound Computed Tomography</div>
      <div className="content-text">
        Ultrasound computed tomography (USCT) is an emerging medical imaging
        technology that can provide high-resolution estimates of tissue acoustic
        properties by utilizing ultrasound and tomographic principles. Image
        formation in USCT is based on the interaction of acoustic wave signals
        with biological tissues. Quantitative reconstructions of a tissue's
        acoustic properties from USCT data can then be achieved via a variety of
        computational methods, providing high-resolution images of breast tissue
        acoustic properties of significant diagnostic value for breast cancer.
      </div>

      <div className="content-title">Full Waveform Inversion in USTC</div>
      <div className="content-text">
        Full waveform inversion (FWI) is an image reconstruction method that
        estimates high-resolution maps of breast tissue acoustic properties from
        measurements of pressure distributions. FWI models the propagation of an
        ultrasound signal in biological tissues by numerical solution of wave
        equation. By incorporating accurate wave-physics in the implementation
        of the imaging operator, FWI allows for superior accuracy and resolution
        compared to geometric reconstruction methods for USCT, such as bent-ray
        methods. However, this comes at the cost of a significant computational
        burden compared to geometric reconstruction methods. A single 3D
        reconstruction can take hours or days to compute and requires a
        high-performance, possibly GPU accelerated, computer. This computational
        expense is a limiting factor for the widespread applications of FWI in a
        clinical setting where fast reconstruction methods are highly desired.
        Furthermore, the need for a powerful computer increases the cost of USCT
        and prevents its adoption in developing areas.
      </div>
      <div className="content-title">
        Learned FWI Incorporating Task Information for USTC
      </div>
      <div className="content-text">
        This work proposes a learned FWI method utilizing convolutional neural
        networks (CNNs) for accelerated reconstructions. Neural networks have
        demonstrated the ability to construct inverse mappings of nonlinear
        imaging operators, including some promising methods for USCT
        reconstruction. A key contribution of this work is to acknowledge and
        leverage the fact that USCT is often used for specified diagnostic
        tasks, such as tumor detection and localization. To this aim, a novel
        loss function is proposed that includes task-specific information using
        a model of tumor segmentation provided by a U-Net numerical observer.
        Specifically, the proposed loss function consists of a weighted sum of
        the commonly-used mean square error loss in the image domain and a novel
        task-informed objective based on features extracted by the U-Net
        observer. A second contribution of this work is the use of source
        encoding, a common technique used in FWI to reduce computational cost,
        within a learned reconstruction method. By exploiting redundancies in
        data, source encoding can reduce complexity of the CNN architecture and
        accelerate training of the learned FWI method. It is also worth noting
        that the proposed method is developed with the use of anatomically
        realistic training and testing sets that are relevant to breast imaging
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/usct/ustc1.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
      <div className="content-text">
        Figure 1. Network architecture of Learned FWI Incorporating Task
        Information for USTC. Input acoustic measurement images into an
        encoder-decoder CNN for breast phantom predictions. Then the phantoms
        are fed into a U-net to predict the tumors accordingly.
      </div>
      <div className="content-title">Results</div>
      <div className="content-text">
        This work established the feasibility of employing a learned FWI
        reconstruction method employing CNNs from USCT data and demonstrated
        reduced computational burden and the ability to leverage task-specific
        information. A possible limitation of the present work lies in the use
        of an idealized virtual imaging system with point-like transducers and
        of 2D wave propagation physics to simulate the data acquisition process.
        While some precautions were taken to increase the truthfulness of the
        numerical studies with respect to modeling errors in the in-plane
        directivity of due to the finite width of the physical transducers
        elements, the construction of a large dataset of 3D numerical breast
        phantoms and corresponding measurement data is an ongoing effort. In
        particular, a subset of the authors has recently developed an imaging
        model that incorporates elevation-focused transducer properties to
        perform high-fidelity 3D simulation of the data acquisition in USCT ring
        array systems. This new imaging model is currently being investigated in
        the context of model-based 3D FWI.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/usct/ustc2.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
      <div className="content-text">
        Figure 2. Examples of speed of sound maps reconstructed by FWI and
        various instances of InversionNet trained with increasing weight{" "}
        {"\u03B3 "}of the task informed loss. From left to right is the object,
        FWI reconstruction, InversionNet reconstructions with {"\u03B3"}=0, 10
        <sup>-2</sup>, 10<sup>-1</sup> and {String.fromCharCode(8734)}. The
        middle row is a zoomed-in feature for each image highlighting
        differences in image resolution and detected features. The bottom row is
        the resulting tumor segmentation with the true tumor material shown in
        white and the hallucinated tumor materials shown in red. Speed of sound
        estimates reconstructed using FWI and the instance of InversionNet
        without task-informed loss shows a large number of hallucinated tumors,
        while instances of InversionNet trained with {"\u03B3"}
        {">"}=10<sup>-1</sup> lead to accurate tumor segmentation masks.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/usct/ustc3.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
      <div className="content-text">
        Figure 3. Boxplots of RMSEs, SSIMs, and Dice coefficients across the
        testing set for reconstructions from the task-informed study. Using the
        task-informed loss reduces RMSEs and increases the SSIMs and Dice
        coefficient. Best performance is achieved for the task informed weight{" "}
        {"\u03B3"}=10<sup>-1</sup>. The iterative FWI method outperforms the
        InversionNet in terms of RMSE but underperforms in terms of SSIM. With
        the proper task-informed weight ({"\u03B3"}
        {">"}=10<sup>-1</sup> ) the InversionNet demonstrates better task
        performance than the iterative FWI methods as quantified by the Dice
        coefficient. Figure 4. Receiver operator characteristic (ROC) curve for
        FWI and various instances of the task-informed InversionNet. Higher
        values of the task-informed weight {"\u03B3 "} lead to higher AUC.
        Instances of InversionNet trained with {"\u03B3"}
        {">"}=10<sup>-3</sup> outperform FWI in terms of AUC.
      </div>
    </div>
  );
}
