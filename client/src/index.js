import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
    <div>Hello World!</div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);