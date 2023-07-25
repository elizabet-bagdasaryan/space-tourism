import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/Home.tsx";
import Header from "./Components/Header/Header.tsx";
import Footer from "./Components/Footer/Footer.tsx";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
