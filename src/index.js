import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import NavBar from "./components/NavBar";
import Beta from "./components/Beta";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Beta />
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/palvelut" element={<Services />} />
          <Route path="/yhteystiedot" element={<Contacts />}/>
          <Route path="/tietoja" element={<About />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
