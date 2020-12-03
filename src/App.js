// external imports
import React from "react";
import { Switch, Route } from "react-router-dom";
import AOS from "aos";

// assets
import "./Styles/App.scss";
import "aos/dist/aos.css";

// internal imports
import NavComponent from "./Components/NavComponent";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import ProtectedRoutes from "./Components/Helpers/ProtectedRoutes";
import Search from "./Pages/Search";

// initializations
AOS.init();

function App() {
  return (
    <>
      {/* navbar */}
      <NavComponent />

      {/* switch between pages */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/search" component={Search} />

        {/* Routes that must meet the login condition before being accessed */}
        <ProtectedRoutes path="/dashboard" component={Dashboard} />

        <Route path="*" component={NotFound} />
      </Switch>

      {/* footer */}
      <Footer />

      {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348031904145"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
}

export default App;
