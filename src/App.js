import React from "react";
import "./Styles/App.scss";
import NavComponent from "./Components/NavComponent";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <NavComponent />

      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
