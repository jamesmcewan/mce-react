import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import Title from "../Title/Title";
import Content from "../Content/Content";
import Social from "../Social/Social";
import jm from "../../images/jm.jpg";

injectGlobal`
html {
  background: #151617 linear-gradient(#1a0f21, #151617 70%) no-repeat;
}

body {
  /* color: #eff6ff; */
  color: #ccd3dc;
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5em;
}
`;

class App extends Component {
  state = {
    title: {},
    social: {},
    error: {
      isVisible: false,
      text: ""
    }
  };

  getData = () => {
    console.log('gd');
    return fetch("./../../data.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          title: res.title,
          social: res.social
        })
      )
      .catch(err => 
        console.log(err)
        // this.setState({
        //   error: { isVisible: true, text: "something went wrong" }
        // })
      );
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Title {...this.state.title} img={jm} />
        <Content />
        <Social {...this.state.social} />
      </div>
    );
  }
}

export default App;
