import "./Technology.css";
import Header from "../../Components/Header/Header";
import Space from "../../assets/space.png";
import SpaceDesk from "../../assets/space-desk.png";
import { useState } from "react";

function Technology() {
  const [clickedCircle, setClickedCircle] = useState(-1);

  function handleCircles(circleIndex: number) {
    setClickedCircle(circleIndex);
  }
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
            onClick={() => handleCircles(0)}
            className={clickedCircle === 0 ? "filled" : ""}
          >
            1
          </div>
          <div
            onClick={() => handleCircles(1)}
            className={clickedCircle === 1 ? "filled" : ""}
          >
            2
          </div>
          <div
            onClick={() => handleCircles(2)}
            className={clickedCircle === 2 ? "filled" : ""}
          >
            3
          </div>
        </div>
        <div className="tech-info">
          <h2>THE TERMINOLOGY…</h2>
          <h1>LAUNCH VEHICLE</h1>
          <p className="crew-text tech-text">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <img src={SpaceDesk} className="space-desk" />
      </div>
    </body>
  );
}

export default Technology;
