import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Logout extends Component {
  state = {
    isLoggingOut: false,
  };

  // logout function
  logout = () => {
    // change isLoggingOut to true
    this.setState({
      isLoggingOut: true,
    });
    // destroy the cookie
    cookies.remove("ONYE-NA-ENYO-ISI-YA-ANA-APUTA", { path: "/" });
    // change isLoggingOut to false
    this.setState({
      isLoggingOut: false,
    });
    // direct the user to the landing page
    this.props.history.push("/");
    // refresh page to remove the sign out button from nav bar
    window.location.reload();
    // prevent further reload
    return false;
  };

  render() {
    const { isLoggingOut } = this.state;
    return (
      <Button
        size="sm"
        type="submit"
        variant="outline-danger"
        onClick={() => this.logout()}
      >
        {isLoggingOut ? "Loggingout..." : "Logout"}
      </Button>
    );
  }
}

export default withRouter(Logout);
