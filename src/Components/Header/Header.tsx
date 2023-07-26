import "./Header.css";
import Logo from "../../assets/icon.png";
import Hamburger from "../../assets/hamburger.svg";
import Cross from "../../assets/cross.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleMenuVisibility() {
    setMenuVisible((prevState) => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header-wrap">
      <div className="header">
        <Link to="/home">
          <img src={Logo} className="logo" />
        </Link>
        <img
          src={Hamburger}
          onClick={handleMenuVisibility}
          className={`hamburger ${menuVisible ? "visible" : ""}`}
        />

        <div className="navbar">
          <Link to="/home">
            <p>
              {" "}
              <p>00</p>Home
            </p>
          </Link>
          <Link to="/destination">
            <p>
              {" "}
              <p>01</p>Destination
            </p>
          </Link>
          <Link to="/crew">
            <p>
              {" "}
              <p>02</p>Crew
            </p>
          </Link>
          <Link to="/technology">
            <p>
              {" "}
              <p>03</p>Technology
            </p>
          </Link>
        </div>
      </div>

      <div className={`menu-mobile ${menuVisible ? "visible" : ""}`}>
        <img src={Cross} onClick={handleMenuVisibility} className="cross"></img>
        <Link to="/home">
          <p>
            <b> 00</b> Home{" "}
          </p>
        </Link>
        <Link to="/destination">
          <p>
            {" "}
            <b> 01</b> Destination{" "}
          </p>
        </Link>
        <Link to="/crew">
          <p>
            {" "}
            <b> 02</b> Crew{" "}
          </p>
        </Link>
        <Link to="/technology">
          <p>
            {" "}
            <b> 03</b> Technology{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
