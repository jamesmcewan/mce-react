import React, { Component, Fragment } from "react";
import { injectGlobal } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Meta from "../Meta/Meta";
import Nav from "../Nav/Nav";
import Error from "../Error/Error";
import Title from "../Title/Title";
import Content from "../Content/Content";
import Email from "../Email/Email";
import Social from "../Social/Social";
import messages from "../../helpers/messages";

injectGlobal`
  html {
    background: #151617 linear-gradient(#1a0f21, #151617 70%) no-repeat;
  }

  body {
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

  componentDidMount() {
    const init = {...this.props};
    this.setState({ ...init });
  }

  render() {
    const isThereAnError = this.state.error;

    return (
      <div>
        {!isThereAnError && (
          <Fragment>
            <Meta {...this.state.meta} />
            <Title {...this.state.title} />
            <Router>
              <Fragment>
                <Nav />
                <Route exact path="/" render={() => <Content {...this.state.content} />} />
                <Route path="/email" component={Email} />
              </Fragment>
            </Router>
            <Social {...this.state.social} />
          </Fragment>
        )}
        {isThereAnError && (
          <Fragment>
            <Meta {...this.state.meta} />
            <Error text={this.state.errorText} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
