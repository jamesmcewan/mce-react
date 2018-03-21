import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/components/App/App";
const express = require("express");
const path = require("path"); 
const fs = require("fs");
const data = require("../public/data.json");

const PORT = 2096;
const app = express();
const router = express.Router();

router.get("^/$", (req, res, next) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        // render the app as a string
        const html = ReactDOMServer.renderToString(<App initialData={data} />);
        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
});

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  {maxAge: '30d'}
));

app.use(router);
app.listen(PORT, error => {
  if (error) {
    console.log(error)
  }
  console.log(`listening on ${PORT}...`);
});