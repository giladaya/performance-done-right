import React from "react";

function ListItem(props) {
  const { style = {}, item, starsCount, color } = props;
  console.log(`Render ListItem ${item}`);

  const stars = Array(starsCount)
    .fill("*")
    .join("");

  return (
    <div className="list-item" style={{ ...style, color }}>
      {JSON.stringify(item)}
      {stars}
    </div>
  );
}

export default ListItem;
