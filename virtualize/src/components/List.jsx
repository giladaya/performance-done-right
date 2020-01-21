import React from "react";
import ListItem from "./ListItem";

// const style = {height: '20px'};

function List(props) {
  console.log("Render List");
  const { data, starsCount, color } = props;

  return (
    <div style={{border: '1px solid silver', padding: '0.5em'}}>
      <h3>List</h3>

      <div
        style={{
          height: "200px",
          overflow: "auto",
          border: "2px solid orange"
        }}
      >
        {data.map(item => (
          <ListItem
            key={item}
            item={item}
            starsCount={starsCount}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
