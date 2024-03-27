import ReactDOM from "react-dom/client";
//  import React from 'react'
import App from "./App.jsx";
// import {
// Outlet,
// Route,
// RouterProvider,
// createBrowserRouter,
// createRoutesFromElements,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path="/" element={<Layout />}></Route>)
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <RouterProvider router={router} /> */}
    <App />
  </>
);
