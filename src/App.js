import React from "react";
import "./App.css";
import Row from "./components/row/row";

function App() {
  return (
    <div className="App">
      <h1>NetFlix Clone</h1>
      <Row title="NETFLIX ORIGINALS" />
      <Row title="TRENDING NOW" />
    </div>
  );
}

export default App;
