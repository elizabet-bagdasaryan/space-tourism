import "./Crew.css";
import Header from "../../Components/Header/Header";
import Revaza from "../../assets/revaza.png";
import Rev from "../../assets/revaz.png";
function Crew() {
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2>commander</h2>
          <h1>Douglas Hurley</h1>
          <p className="crew-text">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div className="navbar-crew tab">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
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
