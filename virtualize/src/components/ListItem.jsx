import React from "react";

function ListItem(props) {
  const { style = {}, item, starsCount, color } = props;
  console.log(`Render ListItem ${item}`);

  return (
    <div style={{ ...style, color }}>
      {JSON.stringify(item)}
      {Array(starsCount)
        .fill(0)
        .map((item, idx) => (
          <span key={idx}>*</span>
        ))}
    </div>
  );
}

export default ListItem;
