import React from "react";

export default function Counter(props) {
  const { label, count, setCount } = props;
  console.log(`Render Counter ${label}`);
  return (
    <div>
      {label}: <button onClick={() => setCount(count - 1)}>-</button> {count}{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
