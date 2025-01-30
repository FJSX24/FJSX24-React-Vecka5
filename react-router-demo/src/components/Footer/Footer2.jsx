// Grundexempel utan memoization

function MyComponent({ value }) {
  console.log("Rendering MyComponent...");
  return <div>{value}</div>;
}

export default MyComponent;

// -----------------------------------------
// Grundexempel MED memoization

// import React from "react";

// const MyComponent = React.memo(function MyComponent({ value }) {
//   console.log("Rendering MyComponent...");
//   return <div>{value}</div>;
// });

// export default MyComponent;

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// Lazy Loading utan

// function MyComponent() {
//   return <div>This component is loaded eagerly.</div>;
// }

// export default MyComponent;
// -----------------------------------------
// Implementera Lazy Loading
