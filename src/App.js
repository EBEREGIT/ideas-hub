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

function App() {
  return (
    <>
      {/* navbar */}
      <NavComponent />

      {/* switch between pages */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
