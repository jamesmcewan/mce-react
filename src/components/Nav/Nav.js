import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/email">Email</Link></li>
    </ul>
  </nav>
);

export default Nav;