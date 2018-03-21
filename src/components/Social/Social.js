import React from "react";
import styled from "styled-components";
import SocialIcon from '../SocialIcon/SocialIcon';

const Footer = styled.footer`
  width: 90%;
  max-width: 832px;
  margin: auto;
  padding-top: 13px;
  @media screen and (min-width: 750px) {
    padding-top: 26px;
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

const Social = ({ items }) => (
  <Footer>
    <Ul>{items && items.map(i => <SocialIcon {...i} key={i.title} />)}</Ul>
  </Footer>
);

export default Social;
