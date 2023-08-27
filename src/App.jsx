import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MiddleContainer from "./components/MiddleContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <MiddleContainer />
      <Footer />
    </div>
  );
};

export default App;
