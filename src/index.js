import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import NavBar from "./modules/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./modules/Footer";
import Services from "./pages/Services";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palvelut" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
