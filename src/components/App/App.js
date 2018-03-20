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
    title: {
      text:
        "Hey! I'm James McEwan, a Web Developer based in Edinburgh, Scotland",
      imgAlt: "James McEwan"
    },
    social: [
      {
        title: "Github",
        link: "http://github.com/jamesmcewan"
      },
      {
        title: "Dribbble",
        link: "http://dribbble.com/mce"
      },
      {
        title: "Codepen",
        link: "http://codepen.com/mce"
      },
      {
        title: "Linkedin",
        link: "http://instagram.com/jamesmcewan"
      },
      {
        title: "mail",
        link: "mailto:james@mce.codes"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Title {...this.state.title} img={jm} />
        <Content />
        <Social {...this.state} />
      </div>
    );
  }
}

export default App;
