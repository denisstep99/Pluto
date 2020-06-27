import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Tag from "./components/Tag/Tag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Tag size={"m"} text={"hello"}></Tag>
        <Tag size={"s"} text={"hello"}></Tag>
      </header>
    </div>
  );
}

export default App;
