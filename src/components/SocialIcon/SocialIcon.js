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

const lCase = (text) => text && text.toLowerCase();

const SocialIcon = ({ link, title }) => (
  <Li>
    <A href={link} title={title} className={`ss-${lCase(title)}`}>
      <Hide>github</Hide>
    </A>
  </Li>
);

export default SocialIcon;
