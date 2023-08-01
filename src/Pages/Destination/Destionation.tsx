import "./Destination.css";
import Header from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
function Destination() {
  const [clickedDest, setClickedDest] = useState(0);

  function handleDestination(destIndex: number) {
    setClickedDest(destIndex);
  }

  const [destinationInfo, setDestinationInfo] = useState<Destination | null>(
    null
  );

  const handleDestinationClick = async (destinationName: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/destination/${destinationName}`
      );
      setDestinationInfo(response.data.destination);
    } catch (error) {
      console.error("Error fetching info:", error);
      setDestinationInfo(null);
    }
  };
  useEffect(() => {
    const fetchFirstDestination = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/destination/Moon"
        );
        setDestinationInfo(response.data.destination);
      } catch (error) {
        console.error("Error fetching first ", error);
        setDestinationInfo(null);
      }
    };

    fetchFirstDestination();
  }, []);

  const handleElementClick = (destIndex: number, destinationName: string) => {
    handleDestination(destIndex);
    handleDestinationClick(destinationName);
  };


  return (
    <body className="destination">
      <Header />
      <div className="destination-divs">
        <div>
          <h3>
            <p>01</p>Pick your destination
          </h3>
          <img src={"http://localhost:3000"+destinationInfo?.images.png}></img>
        </div>
        <div className="dest-info">
          <div className="navbar-destination">
            <p
              onClick={() => handleElementClick(0, "Moon")}
              className={clickedDest === 0 ? "clicked" : ""}
            >
              MOON
            </p>
            <p
              onClick={() => handleElementClick(1, "Mars")}
              className={clickedDest === 1 ? "clicked" : ""}
            >
              MARS
            </p>
            <p
              onClick={() => handleElementClick(2, "Europa")}
              className={clickedDest === 2 ? "clicked" : ""}
            >
              EUROPA
            </p>
            <p
              onClick={() => handleElementClick(3, "Titan")}
              className={clickedDest === 3 ? "clicked" : ""}
            >
              TITAN
            </p>
          </div>
          <h1>{destinationInfo?.name}</h1>
          <p className="text-dest">{destinationInfo?.description}</p>
          <hr />
          <div className="statistics">
            <div>
              <p>AVG. DISTANCE</p>
              <p>{destinationInfo?.distance}</p>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <p>{destinationInfo?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Destination;
