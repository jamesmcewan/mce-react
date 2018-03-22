import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 90%;
  max-width: 832px;
  margin: auto;
  padding-top: 13px;

  @media screen and (min-width: 750px) {
    padding-top: 26px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 13px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 26px;
  background: #c3ffde;
  color: #151617;
  border: 0;
  border-radius: 2px;
  margin-bottom: 26px;
  padding: 6px;
  box-sizing: border-box;
`;


const TextArea = styled.textarea`
  width: 100%;
  font-size: 26px;
  background: #c3ffde;
  color: #151617;
  border: 0;
  border-radius: 2px;
  margin-bottom: 26px;
  padding: 6px;
  box-sizing: border-box;
  min-height: 150px;
`;

const Button = styled.button`
  font-size: 26px;
  background: #c3ffde;
  color: #151617;
  border: 0;
  border-radius: 2px;
  margin-bottom: 26px;
  padding: 13px;
  box-sizing: border-box;
`;

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Email extends Component {
  state = {
    fullName: "",
    email: "",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => console("Success!"))
        .catch(error => console(error));
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
      <Container>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor="fullName">Name</Label>
            <Input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <TextArea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>

          <Button type="submit" name="send">
            Send!
          </Button>
        </form>
      </Container>
    );
  }
}

export default Email;
