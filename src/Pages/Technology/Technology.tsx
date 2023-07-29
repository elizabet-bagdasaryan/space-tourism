import "./Technology.css";
import Header from "../../Components/Header/Header";
import Space from "../../assets/space.png";
import SpaceDesk from "../../assets/space-desk.png";
import { useState, useEffect } from "react";
import axios from "axios";
interface Technology {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
}
function Technology() {
  return (
    <body className="technologies crew">
      <Header />

      <h3>
        <p>03</p>SPACE LAUNCH 101
      </h3>
      <img src={Space} className="space-mob"></img>
      <div className="crew-wrap tech-wrap">
        <div className="navbar-tech mob">
          <div
            onClick={() => handleCircleClick(0, "Launch vehicle")}
            className={clickedCircle === 0 ? "filled" : ""}
          >
            1
          </div>
          <div
            onClick={() => handleCircleClick(1, "Spaceport")}
            className={clickedCircle === 1 ? "filled" : ""}
          >
            2
          </div>
          <div
            onClick={() => handleCircleClick(2, "Space capsule")}
            className={clickedCircle === 2 ? "filled" : ""}
          >
            3
          </div>
        </div>
        <div className="tech-info">
          <h2>THE TERMINOLOGY…</h2>
          <h1>{techInfo?.name}</h1>
          <p className="crew-text tech-text">{techInfo?.description}</p>
        </div>
        <img src={SpaceDesk} className="space-desk" />
      </div>
    </body>
  );
}

export default Technology;
