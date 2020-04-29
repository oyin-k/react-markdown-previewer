import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import Editor from "./Editor";
import Preview from "./Preview";

const TopBar = () => {
  return (
    <div className="topbar">
      <h1>Mac-Down</h1>
    </div>
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <TopBar />
        <div className="App">
          <Editor />
          <Preview />
        </div>
      </div>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
