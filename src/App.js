import React, { Component } from "react";
import { HeadFormule } from "./Description";
import { Plot } from "./Graph";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <HeadFormule />
        </div>
        <br />
        <br />
        <Plot />
      </div>
    );
  }
}

export default App;
