import React, { Component, Fragment } from "react";
import { injectGlobal } from "styled-components";
import Meta from "../Meta/Meta";
import Error from "../Error/Error";
import Title from "../Title/Title";
import Content from "../Content/Content";
import Social from "../Social/Social";
import messages from "../../helpers/messages";

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
    meta: {},
    title: {},
    content: {},
    social: {},
    error: false,
    errorText: ""
  };

  getData = () => {
    return fetch("./../../data.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          meta: res.meta,
          title: res.title,
          content: res.content,
          social: res.social
        })
      )
      .catch(err =>
        this.setState({
          meta: messages.meta,
          error: true, 
          errorText: messages.errorText
        })
      );
  };

  componentWillMount() {
    this.getData();
    
  }

  render() {
    const isThereAnError = this.state.error;

    return (
      <div>
        {!isThereAnError && (
          <Fragment>
            <Meta {...this.state.meta} />
            <Title {...this.state.title} />
            <Content {...this.state.content} />
            <Social {...this.state.social} />
          </Fragment>
        )}
        {isThereAnError && 
        <Fragment>
          <Meta {...this.state.meta} />
          <Error text={this.state.errorText} />
        </Fragment>
        }
      </div>
    );
  }
}

export default App;
