import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Login(props) {
  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="primary">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
      <Input
        placeholder="Username"
        disableUnderline={true}
        inputProps={{
          "aria-label": "Description"
        }}
        onChange={e => props.onEmailChange(e.target.value)}
      />
      <Divider />
      <Input
        placeholder="Password"
        disableUnderline={true}
        type="password"
        inputProps={{
          "aria-label": "Description"
        }}
        onChange={e => props.onPasswordChange(e.target.value)}
      />
      <Divider />
      <Button
        variant="raised"
        color="primary"
        onClick={function() {
          props.onClick();
        }}
      >
        Login
      </Button>
    </React.Fragment>
  );
}

export default Login;
