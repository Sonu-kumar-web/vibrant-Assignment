import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { editPost } from "../redux/actions/post";

class EditUserData extends Component {
  constructor(props) {
    super(props);
    const { userId, name, location } = this.props.location.data.row;
    this.state = {
      formSubmit: false,
      userId: userId,
      name: name,
      location: location,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitFormData = () => {
    const { userId, name, location } = this.state;
    const { _id } = this.props.location.data.row;
    let formData = {
      id: _id,
      userId: userId,
      name: name,
      location: location,
    };
    this.props.editPost(formData);
    this.setState({ formSubmit: true });
  };

  render() {
    // console.log("LinkData**************", this.props.location.data.row);

    const { userId, name, location } = this.state;
    if (this.state.formSubmit) {
      return <Redirect to="/table" />;
    }

    return (
      <div className="form_container">
        <div className="form">
          <form>
            <h3>Edit User Detail</h3>
            <TextField
              className="textField"
              id="outlined-basic"
              label="UserId"
              variant="outlined"
              name="userId"
              value={userId}
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
              value={name}
              required="true"
            />
            <TextField
              id="outlined-basic"
              className="textField"
              label="Location"
              variant="outlined"
              name="location"
              onChange={(e) => this.handleChange(e)}
              value={location}
              required="true"
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

export default connect(null, { editPost })(EditUserData);
