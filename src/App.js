import React, { Component } from "react";
import styled, { injectGlobal } from 'styled-components';
import jm from "./images/jm.jpg";

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

const H1 = styled.h1`
  margin: 0;
  color: #ccd3dc;
  font-size: 20px;
  line-height: 1.5em;
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: 750px) {
    font-size: 32px;
  }
`;

const A = styled.a`
  color: #c3ffde;
  text-decoration: none;
  transition: color 1.5s;

  &:active,
  &:focus,
  &:hover {
    color: #a168ff;
  }
`;

const Header = styled.header`
  padding-top: 13px;
  width: 90%;
  max-width: 832px;
  margin: auto;
  @media screen and (min-width: 750px) {
    padding-top: 26px;
    display: flex;
  }
`;

const Main = styled.main`
  width: 90%;
  max-width: 832px;
  margin: auto;
`;

const Footer = styled.footer`
  width: 90%;
  max-width: 832px;
  margin: auto;
  padding-top: 13px;
  @media screen and (min-width: 750px) {
    padding-top: 26px;
  }
`;

const Img = styled.img`
  height: 90px;
  margin: 0 auto 26px;
  display: block;
  border-radius: 1rem;
  @media screen and (min-width: 750px) {
    margin: 0 26px 0 0;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Li = styled.li`
  font-size: 52px;
  margin: 26px 13px;
  position: relative;
`;

const Hide = styled.span`
    position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <H1>
            Hey! I&#x27;m James McEwan, a Web Developer based in Edinburgh,
            Scotland
          </H1>
          <Img src={jm} alt="James McEwan" />
        </Header>
        <Main role="main" class="content">
          <p>
            For a over a decade I&#39;ve worked as a Web Developer on an array
            of cool projects for some amazing clients. I love working with
            JavaScript and crafting great and accessible web apps.
          </p>
          <p>
            Among my favourite things in this world, are coffee, fancy beer,
            comic books, cartoons from the 80s and a damn good burrito.
          </p>
          <p>
            If you&#39;ve got a project you&#39;d like me to take a look at, or
            just want to discuss code, comics or movie monsters then Get in
            touch!
          </p>
        </Main>

        <Footer>
          <Ul>
            <Li>
              <A
                href="http://github.com/jamesmcewan"
                title="github"
                className="ss-github"
              >
                <Hide>github</Hide>
              </A>
            </Li>
            <Li>
              <A
                href="http://dribbble.com/mce"
                title="dribbble"
                className="ss-dribbble"
              >
                <Hide>dribbble</Hide>
              </A>
            </Li>
            <Li>
              <A
                href="http://codepen.com/mce"
                title="codepen"
                className="ss-codepen"
              >
                <Hide>codepen</Hide>
              </A>
            </Li>
            <Li>
              <A
                href="http://instagram.com/jamesmcewan"
                title="instagram"
                className="ss-instagram"
              >
                <Hide>instagram</Hide>
              </A>
            </Li>
            <Li>
              <A
                href="http://linkedin.com/in/jamesmcewan"
                title="linkedin"
                className="ss-linkedin"
              >
                <Hide>linkedin</Hide>
              </A>
            </Li>
            <Li>
              <A href="mailto:james@mce.codes" title="email" className="ss-mail">
                <Hide>email</Hide>
              </A>
            </Li>
          </Ul>
        </Footer>
      </div>
    );
  }
}

export default App;
