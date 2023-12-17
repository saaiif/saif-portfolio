import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
}

export default App;
