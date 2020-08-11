import React from "react";
import "./Styles/App.scss";
import NavComponent from "./Components/NavComponent";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavComponent />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
