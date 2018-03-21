import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  text-align: center;
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

const Error = ({ text }) => (
  <Div>
    <H1>{text}</H1>
  </Div>
);

export default Error;
