import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import MainLayOut from "./Common/MainLayOut.jsx";
import Dashboard from "./Dashboard.jsx";
import ViewUser from "./DropDownItems/ViewUser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<MainLayOut />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/view-user" element={<ViewUser />} /> 
          <Route path="/contact-enquirys" element={<ViewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
