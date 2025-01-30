// import React, { useState } from "react";
// import MyComponent from "./components/MyComponent/MyComponent";

// Lazy Loading import
import React, { lazy, Suspense } from "react";

// import LazyA from "./components/Lazy/LazyA";
// import LazyB from "./components/Lazy/LazyB";
const LazyA = lazy(() => import("./components/Lazy/LazyA"));
const LazyB = lazy(() => import("./components/Lazy/LazyB"));

function App() {
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState(1);

  return (
    <main>
      {/* <h1>React.memo Demo</h1>
      <button onClick={() => setCount(count + 1)}>Öka: {count}</button>
      <button onClick={() => setValue(value + 1)}>
      Vid klick kommer MyComponent att omrenderas
      </button> */}
      <h1>Lazy Loading Demo</h1>
      <Suspense fallback={<p>LazyA komponenten laddas....</p>}>
        <LazyA />
      </Suspense>
      <Suspense fallback={<p>LazyBy komponenten laddas....</p>}>
        <LazyB />
      </Suspense>
    </main>
  );
}

export default App;
