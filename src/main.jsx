import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Hero from "./components/Hero";
import Speakers from "./components/Speakers";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Hero />
      <Speakers />
      <Contact />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
