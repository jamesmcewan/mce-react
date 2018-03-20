import React from "react";
import styled from "styled-components";

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

const Img = styled.img`
  height: 90px;
  margin: 0 auto 26px;
  display: block;
  border-radius: 1rem;
  @media screen and (min-width: 750px) {
    margin: 0 26px 0 0;
  }
`;

const Title = ({ text, img, imgAlt }) => (
  <Header>
    <H1>{text}</H1>
    <Img src={img} alt={imgAlt} />
  </Header>
);

export default Title;
