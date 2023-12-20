import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { Particle } from "./components/Particle.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Particle />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
