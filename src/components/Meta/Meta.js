import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({text}) => (
  <Helmet>
    <title>{text}</title>
  </Helmet>
);

export default Meta;
