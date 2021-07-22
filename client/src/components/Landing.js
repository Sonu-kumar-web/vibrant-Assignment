import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="card">
          <div>
            <h1>Welcome to Vibrant-Info</h1>
          </div>
          <div className="button">
            <Link to="/login" className="link">
              <Button type="submit" variant="outlined" color="Primary">
                Login
              </Button>
            </Link>
            <Link to="/signup" className="link">
              <Button type="submit" variant="outlined" color="Primary">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
