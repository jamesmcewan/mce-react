import React from "react";
import styled from "styled-components";

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

const Icon = ({ link, title }) => (
  <Li>
    <A href={link} title={title} className={`ss-${title.toLowerCase()}`}>
      <Hide>github</Hide>
    </A>
  </Li>
);

const Social = ({ items }) => (
  <Footer>
    <Ul>{items.map(i => <Icon {...i} key={i.title} />)}</Ul>
  </Footer>
);

Social.defaultProps = {
  items: [
    {
      "title": "",
      "link": ""
    },
  ]
};

export default Social;
