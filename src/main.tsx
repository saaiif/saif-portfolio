import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='*' element={"Not Found"} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading.....</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
