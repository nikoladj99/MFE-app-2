import React from "react";
import ReactDOM from "react-dom";
import Component2 from "./component2";
import Component1 from "app1/Component1";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Component1></Component1>
    <Component2></Component2>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
