import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import "./index.css";
// import Intro from "./pages/intro/Intro";
// import Skills from "./pages/skills/skills";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <App />
        {/* <RouterProvider router={router} /> */}
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
