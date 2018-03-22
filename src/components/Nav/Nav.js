import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  width: 90%;
  max-width: 832px;
  margin: auto;
  padding-top: 13px;

  @media screen and (min-width: 750px) {
    padding-top: 26px;
  }
`;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const Li = styled.li`
  list-style-type: none;
  width: 100px;
`;

const NavLink = styled(Link)`
  color: #c3ffde;
  text-decoration: none;
  transition: color 1.5s;

  &:active,
  &:focus,
  &:hover {
    color: #a168ff;
  }
`;

const Nav = () => (
  <NavWrapper>
    <Ul>
      <Li>
        <NavLink to="/">Home</NavLink>
      </Li>
      <Li>
        <NavLink to="/">About</NavLink>
      </Li>
      <Li>
        <NavLink to="/">Writings</NavLink>
      </Li>
      <Li>
        <NavLink to="/email">Email</NavLink>
      </Li>
    </Ul>
  </NavWrapper>
);

export default Nav;
