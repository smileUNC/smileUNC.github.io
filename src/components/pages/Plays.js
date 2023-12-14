import React, { useState } from "react";
import "./plays.css"; // Your CSS file for styling

import co from "../../videos/co.gif";
import lanl from "../../videos/lanl.gif";
import phy from "../../videos/phy.jpg";
import comp from "../../videos/comp.gif";
import inv from "../../videos/inv.gif";

const MediaPlayer = ({ mediaList }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((current) => (current + 1) % mediaList.length);
  };
  const prevMedia = () => {
    setCurrentMediaIndex((current) =>
      current === 0 ? mediaList.length - 1 : current - 1
    );
  };

  const isImage = (media) => {
    return media.type === "image";
  };

  const MediaContent = ({ media }) => {
    return (
      <div className="media-wrapper">
        {isImage(media) ? (
          <img
            src={media.src}
            alt={media.title}
            className="media-player"
            key={media.src}
          />
        ) : (
          <img
            src={media.src}
            alt="Animated content"
            className="media-player"
          />
        )}
      </div>
    );
  };
  const currentMedia = mediaList[currentMediaIndex];

  return (
    <div className="main-container">
      <div className="media-info">
        <div className="media-title">{currentMedia.title}</div>
        <div className="media-author">{currentMedia.author}</div>
        <div className="media-paper">{currentMedia.paper}</div>
        <div className="media-vol">{currentMedia.vol}</div>
      </div>
      <div className="media-container">
        <MediaContent media={currentMedia} />
        <button className="prev-button" onClick={prevMedia}>
          Prev
        </button>
        <button className="next-button" onClick={nextMedia}>
          Next
        </button>
      </div>
    </div>
  );
};

// Usage example
const mediaSources = [
  {
    src: phy,
    type: "image",
    title: "Physics-Guided Machine Learning-based Computational Wave Imaging",
    author: "Youzuo Lin, James Theiler, and Brendt Wohlberg",
    paper:
      "Physics-Guided Data-Driven Seismic Inversion: Recent Progress and Future Opportunities in Full-Waveform Inversion",
    vol: "IEEE Signal Processing Magazine, 2023.",
  },
  {
    src: lanl,
    type: "gif",
    title: "Style Transfer",
    author: "Shihang Feng, Youzuo Lin, and Brendt Wohlberg",
    paper:
      " Multiscale Data-driven Seismic Full-waveform Inversion with Field Data Study",
    vol: "IEEE Transactions on Geoscience and Remote Sensing (IF: 5.63) , vol. 60, pp. 1-14, 2021.",
  },

  {
    src: co,
    type: "gif",
    title: "Carbon Sequestration Monitoring",
    // title: "CO₂ Releasing",
    author:
      "Shihang Feng, Xitong Zhang, Brendt Wohlberg, Neill Symons, and Youzuo Lin",
    paper:
      "Connect the Dots: In Situ 4D Seismic Monitoring of CO2 Storage with Spatio-temporal CNNs",
    vol: "IEEE Transactions on Geoscience and Remote Sensing, vol. 60, pp. 1-16, 2021.",
  },
  {
    src: comp,
    type: "gif",
    title: "Edge Computing",
    author:
      "Z Wang, I Putla, W Jiang, Y Lin, via collaboration with Weiwen Jiang",
    paper:
      "Edge-InversionNet: Enabling Efficient Inference of InversionNet on Edge Devices",
    vol: "arXiv preprint arXiv:2310.09667, 2023.",
  },
  {
    src: inv,
    type: "gif",
    title: "InversionNet 3D",
    author: "Qili Zeng, Shihang Feng, Brendt Wohlberg, and Youzuo Lin",
    paper:
      "InversionNet3D: Efficient and Scalable Learning for 3D Full Waveform Inversion",
    vol: "IEEE Transactions on Geoscience and Remote Sensing (IF: 5.63) , vol 60, pp. 1-16, 2021.",
  },
];

const Plays = () => {
  return <MediaPlayer mediaList={mediaSources} />;
};

export default Plays;
