import React from "react";
import "./App.css";
import Row from "./components/row/row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>NetFlix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
