import React from "react";
import styled from "styled-components";
import Icon from '../Icon/Icon';

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
    <Ul>{items.map(i => <Icon {...i} key={i.title} />)}</Ul>
  </Footer>
);

Social.defaultProps = {
  items: [
    {
      title: "",
      link: ""
    }
  ]
};

export default Social;
