import "./Technology.css";
import Header from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
function Technology() {
  const [clickedCircle, setClickedCircle] = useState(0);

  function handleCircles(circleIndex: number) {
    setClickedCircle(circleIndex);
  }

  const [techInfo, setTechInfo] = useState<Technology | null>(null);

  const handleTechClick = async (techName: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/technology/${techName}`
      );
      setTechInfo(response.data.technology);
    } catch (error) {
      console.error("Error fetching  info:", error);
      setTechInfo(null);
    }
  };

  useEffect(() => {
    const fetchFirstTech = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/technology/Launch vehicle"
        );
        setTechInfo(response.data.technology);
      } catch (error) {
        console.error("Error fetching first ", error);
        setTechInfo(null);
      }
    };

    fetchFirstTech();
  }, []);

  const handleCircleClick = (circleIndex: number, techName: string) => {
    handleCircles(circleIndex);
    handleTechClick(techName);
  };
  return (
    <body className="technologies crew">
      <Header />

      <h3>
        <p>03</p>SPACE LAUNCH 101
      </h3>
      <img src={"http://localhost:3000" + techInfo?.images.landscape} className="space-mob"></img>
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
        <img src={"http://localhost:3000" + techInfo?.images.portrait} className="space-desk" />
      </div>
    </body>
  );
}

export default Technology;
