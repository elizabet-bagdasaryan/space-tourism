import "./Header.css";
import Logo from "../../assets/icon.png";
import Hamburger from "../../assets/hamburger.svg";
import Cross from "../../assets/cross.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [clickedPage, setClickedPage] = useState(-1);

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

  function handlePages(pageIndex: number) {
    setClickedPage(pageIndex);
  }
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
            <div
              onClick={() => handlePages(0)}
              className={clickedPage === 0 ? "click" : ""}
            >
              {" "}
              <p>00</p>
              <p>Home</p>
            </div>
          </Link>
          <Link to="/destination">
            <div
              onClick={() => handlePages(1)}
              className={clickedPage === 1 ? "click" : ""}
            >
              {" "}
              <p>01</p>
              <p>Destination</p>
            </div>
          </Link>
          <Link to="/crew">
            <div
              onClick={() => handlePages(2)}
              className={clickedPage === 2 ? "click" : ""}
            >
              {" "}
              <p>02</p>
              <p>Crew</p>
            </div>
          </Link>
          <Link to="/technology">
            <div
              onClick={() => handlePages(3)}
              className={clickedPage === 3 ? "click" : ""}
            >
              {" "}
              <p>03</p>
              <p>Technology</p>
            </div>
          </Link>
        </div>
      </div>

      <div className={`menu-mobile ${menuVisible ? "visible" : ""}`}>
        <img src={Cross} onClick={handleMenuVisibility} className="cross"></img>
        <Link to="/home">
          <div>
            <b> 00</b> Home{" "}
          </div>
        </Link>
        <Link to="/destination">
          <div>
            {" "}
            <b> 01</b> Destination{" "}
          </div>
        </Link>
        <Link to="/crew">
          <div>
            {" "}
            <b> 02</b> Crew{" "}
          </div>
        </Link>
        <Link to="/technology">
          <div>
            {" "}
            <b> 03</b> Technology{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
