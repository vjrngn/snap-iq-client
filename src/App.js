import React, { Component } from "react";
import Login from "./components/Login";
import axios from "axios";
import { Router, Route, Switch } from "react-router";

class App extends Component {
  state = {
    email: "",
    password: ""
  };

  onClick = () => {
    axios
      .post("http://192.168.1.111:3000/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(function(response) {
        localStorage.setItem("token", response.data.token);
        if (localStorage.getItem("token") != null) {
        }
      });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw"
        }}
      >
        <div>
          <Login
            onEmailChange={value => this.setState({ email: value })}
            onPasswordChange={value => this.setState({ password: value })}
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
