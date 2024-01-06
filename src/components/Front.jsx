import React from "react";
import Banner1 from "../asset/Banner.jpg";

import "./front.css";

const Front = () => {
 
  return (
    <>
      <div className="banner">
        <div className="bannerimg">
          <img src={Banner1} alt="bannerimg" />
        </div>
        <div className="bannerdic">
          <h1>PRADA</h1>
          <h3>
            Big Festival Season <br />
            50%-80% OFF
          </h3>

          <button>Explore</button>
        </div>
      </div>
    </>
  );
};

export default Front;
