import "./Crew.css";
import Header from "../../Components/Header/Header";
import Rev from "../../assets/revaz.png";
import { useState } from "react";
function Crew() {
  const [clickedDot, setClickedDot] = useState(-1);

  function handleDots(dotIndex: number) {
    setClickedDot(dotIndex);
  }
  return (
    <body className="crew">
      <Header />
      <div className="crew-wrap">
        <div>
          <h3>
            <p>02</p>Meet your crew
          </h3>
          <img src={Rev} className="rez-mob"></img>
          <hr className="line" />
          <div className="navbar-crew mob">
            <div
              onClick={() => handleDots(0)}
              className={clickedDot === 0 ? "chosen" : ""}
            ></div>
            <div
              onClick={() => handleDots(1)}
              className={clickedDot === 1 ? "chosen" : ""}
            ></div>
            <div
              onClick={() => handleDots(2)}
              className={clickedDot === 2 ? "chosen" : ""}
            ></div>
            <div
              onClick={() => handleDots(3)}
              className={clickedDot === 3 ? "chosen" : ""}
            ></div>
          </div>
          <h2>commander</h2>
          <h1>Douglas Hurley</h1>
          <p className="crew-text">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div className="navbar-crew tab">
            <div
              onClick={() => handleDots(0)}
              className={clickedDot === 0 ? "chosen" : ""}
            ></div>
            <div
              onClick={() => handleDots(1)}
              className={clickedDot === 1 ? "chosen" : ""}
            ></div>
            <div
              onClick={() => handleDots(2)}
              className={clickedDot === 2 ? "chosen" : ""}
            ></div>
            <div
              onClick={() => handleDots(3)}
              className={clickedDot === 3 ? "chosen" : ""}
            ></div>
          </div>
        </div>
        <div>
          <img src={Rev} className="rez-tab"></img>
        </div>
      </div>
    </body>
  );
}

export default Crew;
