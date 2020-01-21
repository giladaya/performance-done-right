import React from "react";
import ListContainer from "./ListContainer";

export default function App(props) {
  const {updateStats} = props;
  return (
    <div className="component-wrap">
      <h1 className="component-label">App</h1>
      <React.Profiler id="ListContainer" onRender={updateStats}>
        <ListContainer />
      </React.Profiler>
    </div>
  );
}
