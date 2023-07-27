import "./Destination.css";
import Header from "../../Components/Header/Header";
import Moon from "../../assets/moon.png";
function Destination() {
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
            <p>MOON</p>
            <p>MARS</p>
            <p>EUROPA</p>
            <p>TITAN</p>
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
