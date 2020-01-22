import React from "react";
import ListItem from "./ListItem";

// const style = {height: '20px'};

function List(props) {
  console.log("Render List");
  const { data, starsCount, color } = props;

  return (
    <div className="component-wrap">
      <h3 className="component-label">List</h3>

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
            data={item}
            starsCount={starsCount}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
