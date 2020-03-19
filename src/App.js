import React, { Component } from "react";
import "./App.css";
import Grid from "./Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-banner">Lights Out</div>
        <Grid />
      </div>
    );
  }
}

export default App;
