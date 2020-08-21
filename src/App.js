// external imports
import React from "react";
import { Switch, Route } from "react-router-dom";

// assets
import "./Styles/App.scss";

// internal imports
import NavComponent from "./Components/NavComponent";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import ProtectedRoutes from "./Components/Helpers/ProtectedRoutes";
import Search from "./Pages/Search";

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
    </>
  );
}

export default App;
