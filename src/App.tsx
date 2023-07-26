import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/Home.tsx";
import Destination from "./Pages/Destination/Destionation.tsx";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
