import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({text, styles}) => (
  <Helmet>
    <title>{text}</title>
    {Array.isArray(styles) && styles.map((style, key) => <link key={`link-${key}`} rel="stylesheet" href={style} />)}
  </Helmet>
);

export default Meta;
