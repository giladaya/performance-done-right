import React from "react";

function ListItem(props) {
  const { style = {}, data, starsCount, color } = props;
  console.log(`Render ListItem ${data}`);

  const stars = Array(starsCount)
    .fill("*")
    .join("");

  return (
    <div className="list-item" style={{ ...style, color }}>
      {JSON.stringify(data)}
      {stars}
    </div>
  );
}

export default ListItem;
