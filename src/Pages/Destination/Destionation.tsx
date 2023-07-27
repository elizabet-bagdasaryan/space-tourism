import "./Destination.css";
import Header from "../../Components/Header/Header";
import Moon from "../../assets/moon.png";
import { useState } from "react";
function Destination() {
  const [clickedDest, setClickedDest] = useState(-1);

  function handleDestination(destIndex: number) {
    setClickedDest(destIndex);
  }
  return (
    <body className="destination">
      <Header />
      <div className="destination-divs">
        <div>
          <h3>
            <p>01</p>Pick your destination
          </h3>
          <img src={Moon}></img>
        </div>
        <div className="dest-info">
          <div className="navbar-destination">
            <p
              onClick={() => handleDestination(0)}
              className={clickedDest === 0 ? "clicked" : ""}
            >
              MOON
            </p>
            <p
              onClick={() => handleDestination(1)}
              className={clickedDest === 1 ? "clicked" : ""}
            >
              MARS
            </p>
            <p
              onClick={() => handleDestination(2)}
              className={clickedDest === 2 ? "clicked" : ""}
            >
              EUROPA
            </p>
            <p
              onClick={() => handleDestination(3)}
              className={clickedDest === 3 ? "clicked" : ""}
            >
              TITAN
            </p>
          </div>
          <h1>MOON</h1>
          <p className="text-dest">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div className="statistics">
            <div>
              <p>AVG. DISTANCE</p>
              <p>384,400 km</p>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <p>3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Destination;
