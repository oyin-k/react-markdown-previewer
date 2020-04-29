import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import Editor from "./Editor";
import Preview from "./Preview";

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <Editor />
        <Preview />
      </div>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
