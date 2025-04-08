import { useFileHandler, useInputValidation } from "6pp";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { usernameValidator } from "../utils/validator";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const name = useInputValidation("");
  const username = useInputValidation("",usernameValidator);
  const bio = useInputValidation("");
  const password = useInputValidation("");
  const avatar = useFileHandler("single")

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign In", username.value, password.value);
  }
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign Up", name.value, username.value, password.value, bio.value, avatar.file);
  };

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <Typography variant="body2">Login to your account</Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
              onSubmit={handleSignIn}

            >
              <TextField
                label="Useraname"
                placeholder="Username"
                variant="outlined"
                sx={{ margin: 2 }}
                required
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                label="Password"
                placeholder="Password"
                required
                type="password"
                variant="outlined"
                sx={{ margin: 2 }}
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button variant="contained" type="submit" color="primary" sx={{ margin: 2 }}>
                Login
              </Button>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Button onClick={handleToggle}>Register</Button>
              </Typography>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Create your account
            </Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
              onSubmit={handleSignUp}
            >
              <Stack
                position={"relative"}
                width={"10rem"}
                spacing={2}
                sx={{ margin: "auto" }}
              >
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                  src={avatar.preview}
                />
                <IconButton sx={{ position: "absolute", bottom: 0, right: 0 }} component="label"> 
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>

              <TextField
                label="Name"
                placeholder="Name"
                variant="outlined"
                sx={{ margin: 2 }}
                required
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                label="Bio"
                placeholder="Bio"
                required
                variant="outlined"
                sx={{ margin: 2 }}
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                label="Username"
                placeholder="Username"
                required
                variant="outlined"
                sx={{ margin: 2 }}
                value={username.value}
                onChange={username.changeHandler}
              />
              {
                username.error && (
                  <Typography textAlign={"center"} variant="caption" color="error">
                    {username.error}
                  </Typography>
                )
              }
              <TextField
                label="Password"
                placeholder="Password"
                required
                type="password"
                variant="outlined"
                sx={{ margin: 2 }}
                value={password.value}
                onChange={password.changeHandler}
              />
               
              <Button variant="contained" type="submit" color="primary" sx={{ margin: 2 }}>
                Register
              </Button>
              <Typography variant="body2">
                Already have an account?{" "}
                <Button onClick={handleToggle}>Login</Button>
              </Typography>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
