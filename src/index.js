import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react-snapshot';
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(render(<App />, document.getElementById("root")));
registerServiceWorker();
