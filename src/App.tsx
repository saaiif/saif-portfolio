import "./App.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/home/Home";
import DarkMode from "./components/darkMode/DarkMode";
import Navbar from "./components/navbar/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index={true} path='/' element={<Home />} />
      <Route path='*' element={"Not Found"} />
    </Route>
  )
);

function App() {
  return (
    <div className='app'>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
