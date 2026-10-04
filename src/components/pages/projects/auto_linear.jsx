import { Link } from "react-router";
import ProjectLayout, { Figure } from "../../ProjectLayout";
import { CodeBlock } from "../../common";

const BIBTEX = `@InProceedings{pmlr-v235-feng24a,
  title     = {Auto-Linear Phenomenon in Subsurface Imaging},
  author    = {Feng, Yinan and Chen, Yinpeng and Jin, Peng and Feng, Shihang and Lin, Youzuo},
  booktitle = {Proceedings of the 41st International Conference on Machine Learning},
  pages     = {13153--13174},
  year      = {2024},
  editor    = {Salakhutdinov, Ruslan and Kolter, Zico and Heller, Katherine and Weller, Adrian and Oliver, Nuria and Scarlett, Jonathan and Berkenkamp, Felix},
  volume    = {235},
  series    = {Proceedings of Machine Learning Research},
  month     = {21--27 Jul},
  publisher = {PMLR},
  pdf       = {https://raw.githubusercontent.com/mlresearch/v235/main/assets/feng24a/feng24a.pdf},
  url       = {https://proceedings.mlr.press/v235/feng24a.html}
}`;

export default function AutoLinear() {
  return (
    <ProjectLayout
      title="Auto-Linear Phenomenon in Subsurface Imaging"
      pageTitle="Auto-Linear"
      venue="ICML 2024"
      authors="Yinan Feng, Yinpeng Chen, Peng Jin, Shihang Feng, and Youzuo Lin"
      links={[
        { label: "Paper", href: "https://proceedings.mlr.press/v235/feng24a.html", icon: "paper" },
        {
          label: "PDF",
          href: "https://raw.githubusercontent.com/mlresearch/v235/main/assets/feng24a/feng24a.pdf",
          icon: "pdf",
        },
        { label: "OpenReview", href: "https://openreview.net/forum?id=3ZM8MXGFRA", icon: "website" },
        { label: "BibTeX", to: "#citation", icon: "bibtex" },
      ]}
    >
      <Figure
        src="images/projects/auto-linear/overview.png"
        alt="Overview of InversionNet, InvLINT and Auto-Linear"
        maxWidth={640}
        caption="Overview of the jointly trained encoder-decoder (top), InvLINT (middle), and Auto-Linear (bottom). The orange color indicates components that need to be trained with paired data. Auto-Linear decouples both the encoder and decoder and trains them self-supervised in their own domains; linear converters connect the frozen, pre-trained encoders and decoders."
      />

      <h2>Abstract</h2>
      <p>
        Subsurface imaging involves solving full waveform inversion (FWI) to predict geophysical properties from
        measurements. This problem can be reframed as an image-to-image translation, with the usual approach being to
        train an encoder-decoder network using paired data from two domains: geophysical property and measurement. A
        recent seminal work (InvLINT) demonstrates there is only a linear mapping between the latent spaces of the two
        domains, and the decoder requires paired data for training. This paper extends this direction by demonstrating
        that only linear mapping necessitates paired data, while both the encoder and decoder can be learned from their
        respective domains through self-supervised learning. This unveils an intriguing phenomenon (named Auto-Linear)
        where the self-learned features of two separate domains are automatically linearly correlated. Compared with
        existing methods, our Auto-Linear has four advantages: (a) solving both forward and inverse modeling
        simultaneously, (b) reducing model size, (c) enhanced performance, especially when the paired data is limited,
        and (d) strong generalization ability of the trained encoder and decoder.
      </p>

      <h2>How it works</h2>
      <p>
        Two masked autoencoders are first trained independently — one on seismic data and one on velocity maps. After
        this self-supervised pre-training, the encoders and decoders are frozen, and only a linear converter between the
        two latent spaces is trained with paired seismic data and velocity maps. The same framework handles the inverse
        problem (seismic data → velocity) and forward modeling (velocity → seismic data) with minimal additional
        training. It builds on our earlier finding in{" "}
        <Link to="/projects/invlint">InvLINT</Link> that the two domains are nearly linearly related after integral
        transforms.
      </p>

      <h2>Highlights</h2>
      <ul>
        <li>
          Comparable accuracy to jointly trained networks such as InversionNet on the inverse problem, and better in
          forward modeling, in few-shot settings with limited paired data, and under noise.
        </li>
        <li>Outperforms the earlier decoupled method InvLINT and is more robust to noisy data.</li>
        <li>Also excels in electromagnetic (EM) inversion, another subsurface imaging task.</li>
        <li>
          Different FWI datasets can share encoders and decoders but need different linear mappings, and the singular
          values of the linear layer correlate with dataset complexity.
        </li>
      </ul>

      <Figure
        src="images/projects/auto-linear/results-openfwi.jpg"
        alt="Velocity maps inverted by InversionNet, InvLINT and Auto-Linear on OpenFWI datasets"
        maxWidth={560}
        caption="Results on OpenFWI, compared with InversionNet and InvLINT. Blue boxes mark deep structures that Auto-Linear captures better; the red box marks an artifact pattern produced by InversionNet on Style-B."
      />

      <h2 id="citation">Citation</h2>
      <CodeBlock code={BIBTEX} label="Copy BibTeX" />
    </ProjectLayout>
  );
}
