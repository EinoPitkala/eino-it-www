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
import SomeKayttaytyminen from "./pages/SomeKayttaytyminen";
import EScooter from "./pages/EScooter";

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
          <Route path="/some-kayttaytyminen" element={<SomeKayttaytyminen />}/>
          <Route path="/sahkoskuutin-viritys" element={<EScooter />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
