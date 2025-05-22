import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import MainLayOut from "./Common/MainLayOut.jsx";
import Dashboard from "./Dashboard.jsx";
import ViewUser from "./DropDownItems/User/ViewUser.jsx";
import NewsLatter from "./DropDownItems/Enquiry/NewsLatter.jsx";
import ContactEnquiry from "./DropDownItems/Enquiry/ContactEnquiry.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<MainLayOut />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/view-user" element={<ViewUser/>} /> 
          <Route path="/contact-enquirys" element={<ContactEnquiry />} />
          <Route path="/newslatters" element={<NewsLatter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
