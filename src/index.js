import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-snapshot";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
const data = require('./data.json');

ReactDOM.render(render(<App {...data} />, document.getElementById("root")));
registerServiceWorker();
