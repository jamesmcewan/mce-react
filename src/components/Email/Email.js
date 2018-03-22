import React, { Component } from "react";

class Email extends Component {
  state = {
    fullName: "",
    email: "",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="fullName">name</label>
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" name="send">
          Send!
        </button>
      </form>
    );
  }
}

export default Email;
