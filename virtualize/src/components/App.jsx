import React from "react";
import ListContainer from "./ListContainer";

export default function App(props) {
  const {updateStats} = props;
  return (
    <div>
      <h1>App</h1>
      <React.Profiler id="ListContainer" onRender={updateStats}>
        <ListContainer />
      </React.Profiler>
    </div>
  );
}
