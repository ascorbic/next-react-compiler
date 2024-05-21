"use client";
import React from "react";
import { Child } from "./Child";

export function Parent() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      Count {count}
      <Child onClick={() => setCount((count) => count + 1)} />
    </div>
  );
}
