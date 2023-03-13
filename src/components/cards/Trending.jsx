import React from "react";
import {IoIosArrowForward} from "react-icons/io";

function Trending({image}) {
  return (
    <section className="Trending">
        <p>what's hot 🔥</p>
        <div className="title">
            <h1>Trending</h1>
            <span>More <IoIosArrowForward /> </span>
        </div>
        <div className="details">
            <img src={image} alt="" width="100%" height="100%" />
            <div className="gradient"></div>
            <div className="trending-info">
                <div className="extras">
                    <span>Artist</span>
                    <div>
                        <h2>On Top</h2>
                        <h2> Of The World</h2>
                    </div>
                    <div className="btns">
                        <button className="btn">play</button>
                        <button className="btn follow">follow</button>
                    </div>
                </div>
                <div className="subs">
                    <span>Monthly Listeners</span>
                    <span className="listeners">65,349</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Trending;