import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

function Login() {
  return (
    <React.Fragment>
      <Input
        placeholder="Username"
        inputProps={{
          "aria-label": "Description"
        }}
      />

      <Input
        placeholder="Password"
        inputProps={{
          "aria-label": "Description"
        }}
      />
      <Button color="primary">Login</Button>
    </React.Fragment>
  );
}

export default Login;
