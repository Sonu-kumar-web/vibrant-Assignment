import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmit: false,
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitFormData = () => {
    const { email, password } = this.state;
    if (email.length !== 0 && password.length !== 0) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      this.setState({ formSubmit: true });
    } else if (email.length === 0 && password.length === 0) {
      alert("Please Enter the correct Email/Password");
    }
  };

  render() {
    if (this.state.formSubmit) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="form_container">
        <div className="form">
          <form>
            <h3>New User Register</h3>
            <TextField
              className="textField"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              onChange={(e) => this.handleChange(e)}
              required="true"
            />
            <TextField
              id="outlined-basic"
              className="textField"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              onChange={(e) => this.handleChange(e)}
              required="true"
            />
            <div className="button">
              <Button
                type="submit"
                variant="outlined"
                color="Primary"
                onClick={() => this.onSubmitFormData()}
              >
                Register
              </Button>
              <Link to="/login" className="link">
                <Button
                  type="reset"
                  variant="outlined"
                  color="Secondary"
                  onClick={(e) => this.setState({ formSubmit: true })}
                >
                  Back to Login
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
