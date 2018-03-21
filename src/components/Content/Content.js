import React from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

const Main = styled.main`
  width: 90%;
  max-width: 832px;
  margin: auto;
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
