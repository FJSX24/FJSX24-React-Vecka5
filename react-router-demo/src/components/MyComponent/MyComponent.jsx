import React from "react";

const MyComponent = React.memo(function MyComponent({ value }) {
  console.log("Nu renderasMyComponent");
  return <div>MyComponent {value}</div>;
});

export default MyComponent;
