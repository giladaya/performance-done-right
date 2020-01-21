import React from "react";
import { fibonacci } from "../helpers";

// Show Fibonacci numbers
export default function Fibonacci(props) {
  console.log("Render Fibonacci");
  const { number, color } = props;
  const fiboNum = fibonacci(number);

  return (
    <div style={{ color }}>
      Fibonacci #{number}: {fiboNum}
    </div>
  );
}
