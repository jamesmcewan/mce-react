import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
const data = require('./data.json');

ReactDOM.render(<App {...data} />, document.getElementById("root"));
registerServiceWorker();
