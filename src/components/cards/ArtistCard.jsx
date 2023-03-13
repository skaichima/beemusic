import React from "react";
import { BsThreeDots } from "react-icons/bs"

function Artist({artist}) {
  return (
    <div className="artist-card">
      <div className="artist-info">
        <img src={artist.image} alt="" width="32px" height="32px" />
        <div className="artist--details">
          <h1>{artist.name}</h1>
          <span>{artist["no. of songs"]} songs in library</span>
        </div>        
      </div>
      <BsThreeDots />
    </div>
  );
}

export default Artist;