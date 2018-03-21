import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({text, styles}) => (
  <Helmet>
    <title>{text}</title>
    {styles && styles.map(style => <link rel="stylesheet" href={style} />)}
  </Helmet>
);

export default Meta;
