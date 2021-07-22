import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Login extends Component {
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
    let userExist = localStorage.getItem("email");
    if (userExist !== null) {
      const { email, password } = this.state;
      let userEmail = localStorage.getItem("email");
      let userPassword = localStorage.getItem("password");

      if (userEmail !== email || userPassword !== password) {
        alert("Email/Password is incorrect!!!");
      } else {
        this.setState({ formSubmit: true });
      }
    } else {
      alert("User doesn't Exist!!!");
    }
  };

  render() {
    if (this.state.formSubmit) {
      return <Redirect to="/table" />;
    }

    return (
      <div className="form_container">
        <div className="form">
          <form>
            <h3>New User Login</h3>
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
              minlength="8"
            />
            <div className="button">
              <Button
                type="submit"
                variant="outlined"
                color="Primary"
                onClick={() => this.onSubmitFormData()}
              >
                Login
              </Button>
              <Link to="/signup" className="link">
                <Button
                  type="reset"
                  variant="outlined"
                  color="Secondary"
                  onClick={(e) => this.setState({ formSubmit: true })}
                >
                  Back to Register
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
