import React from "react";
import { FixedSizeList as List } from "react-window";
import ListItem from "./ListItem";

function getRowRenderer(data, starsCount, color) {
  return ({ index, style }) => (
    <ListItem
      style={style}
      item={data[index]}
      starsCount={starsCount}
      color={color}
    />
  );
}

function ListV(props) {
  const { data, starsCount, color } = props;
  const Row = getRowRenderer(data, starsCount, color);
  return (
    <div style={{ border: "1px solid silver", padding: "0.5em" }}>
      <h3>List</h3>
      <List
        height={200}
        itemCount={data.length}
        itemSize={20}
        style={{ border: "2px solid blue" }}
      >
        {Row}
      </List>
    </div>
  );
}

export default ListV;
