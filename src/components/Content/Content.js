import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 90%;
  max-width: 832px;
  margin: auto;
`;

const Content = () => (
  <Main>
    <p>
      For a over a decade I&#39;ve worked as a Web Developer on an array of cool
      projects for some amazing clients. I love working with JavaScript and
      crafting great and accessible web apps.
    </p>
    <p>
      Among my favourite things in this world, are coffee, fancy beer, comic
      books, cartoons from the 80s and a damn good burrito.
    </p>
    <p>
      If you&#39;ve got a project you&#39;d like me to take a look at, or just
      want to discuss code, comics or movie monsters then Get in touch!
    </p>
  </Main>
);

export default Content;
