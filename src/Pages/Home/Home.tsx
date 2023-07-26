import "./Home.css";
import Header from "../../Components/Header/Header";
function Home() {
  return (
    <body className="home">
      <Header />
      <div className="home-divs">
        <div className="text">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <p>EXPLORE</p>
        </div>
      </div>
    </body>
  );
}

export default Home;
