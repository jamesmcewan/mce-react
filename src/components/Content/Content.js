import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Main = styled.main`
  width: 90%;
  max-width: 832px;
  margin: auto;

  a {
    color: #c3ffde;
    text-decoration: none;
    transition: color 1.5s;

    &:active,
    &:focus,
    &:hover {
      color: #a168ff;
    }
  }
`;

const Content = ({ body }) => (
  <Main>
    <ReactMarkdown source={body} />
  </Main>
);

Content.defaultProp = {
  body: ""
};

export default Content;
