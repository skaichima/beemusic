import React from "react";

function MusicCard({ image, name, artists }) {
  return (
    <div className="music-card">
      <img src={image} alt="" />
      <div className="music--details">
        <h1>{name}</h1>
        <span>{artists}</span>
      </div>
    </div>
  );
}

export default MusicCard;