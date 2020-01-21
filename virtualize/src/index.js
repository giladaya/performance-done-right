import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

function updateStats(
  id, // the "id" prop of the Profiler tree that has just committed
  _phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  _startTime, // when React began rendering this update
  _commitTime, // when React committed this update
  _interactions // the Set of interactions belonging to this update
) {
  document.getElementById("stats").innerText = `${id} update: ${actualDuration.toFixed(3)}ms`;
}

ReactDOM.render(<App updateStats={updateStats} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
