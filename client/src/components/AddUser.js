import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../redux/actions/post";

class AddUser extends Component {
  state = { formSubmit: false, userId: "", name: "", location: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitFormData = () => {
    const { userId, name, location } = this.state;
    let formData = {
      userId: userId,
      name: name,
      location: location,
    };
    this.props.createPost(formData);
    this.setState({ formSubmit: true });
  };

  render() {
    if (this.state.formSubmit) {
      return <Redirect to="/table" />;
    }
    return (
      <div className="form_container">
        <div className="form">
          <form>
            <h3>Enter the User Detail</h3>
            <TextField
              className="textField"
              id="outlined-basic"
              label="UserId"
              variant="outlined"
              name="userId"
              onChange={(e) => this.handleChange(e)}
              required="true"
            />
            <TextField
              className="textField"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              onChange={(e) => this.handleChange(e)}
              required
            />
            <TextField
              id="outlined-basic"
              className="textField"
              label="Location"
              variant="outlined"
              name="location"
              onChange={(e) => this.handleChange(e)}
              required
            />
            <div className="button">
              <Button
                type="submit"
                variant="outlined"
                color="Primary"
                onClick={() => this.onSubmitFormData()}
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="outlined"
                color="Secondary"
                onClick={(e) => this.setState({ formSubmit: true })}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { createPost })(AddUser);
