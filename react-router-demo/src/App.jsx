import "./App.css";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter, Outlet, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
