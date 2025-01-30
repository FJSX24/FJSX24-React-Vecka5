import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent/MyComponent";

// Grundexempel utan memoization

function App() {
const [count, setCount] = useState(0);

return (
<div>
<h1>React.memo Demo</h1>
<button onClick={() => setCount(count + 1)}>Increment: {count}</button>
<MyComponent value="This is a static value" />
</div>
);
}

export default App;

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// Lazy Loading utan

// import React from "react";
// import MyComponent from "./MyComponent";

// function App() {
// return (
// <div>
// <h1>Lazy Loading Demo</h1>
// <MyComponent />
// </div>
// );
// }

// export default App;

// -----------------------------------------
// Implementera Lazy Loading

// import React, { lazy, Suspense } from "react";

// const MyComponent = lazy(() => import("./MyComponent"));

// function App() {
// return (
// <div>
// <h1>Lazy Loading Demo</h1>
// <Suspense fallback={<div>Loading component...</div>}>
// <MyComponent />
// </Suspense>
// </div>
// );
// }

// export default App;

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
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
// console.log("Rendering MyComponent...");
// return <div>{value}</div>;
// });

// export default MyComponent;

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// Lazy Loading utan

// function MyComponent() {
// return <div>This component is loaded eagerly.</div>;
// }

// export default MyComponent;
// -----------------------------------------
// Implementera Lazy Loading
