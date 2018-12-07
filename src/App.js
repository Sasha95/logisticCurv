import React, { Component } from "react";
import { HeadFormule } from "./Description";
import { Plot } from "./Graph";

class App extends Component {
  render() {
    return (
      <div>
        <HeadFormule />
        <Plot />
      </div>
    );
  }
}

export default App;
