import React, { Component } from "react";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div
        display="flex"
        justify-content="center"
        align-items="center"
        height="100vh"
        width="100vw"
      >
        <div>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
