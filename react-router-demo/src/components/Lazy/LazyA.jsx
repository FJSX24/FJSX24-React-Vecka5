import React from "react";

export default function LazyA() {
  // Simulera en tung beräkning
  let result = 0;
  for (let i = 0; i < 20500; i++) {
    result += Math.sqrt(i) * Math.random();
  }

  return (
    <div>
      <h2>LazyA Component</h2>
      <p>Resultat av tung beräkning: {result.toFixed(4)}</p>
    </div>
  );
}
