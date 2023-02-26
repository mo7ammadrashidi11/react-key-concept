import react, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography } from "@mui/material";

type UserType = {
  username: string;
  password: string;
};

export default function SignIn() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const formik = useFormik<UserType>({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {},
  });
  const handleSubmit = () => {
    console.log("submitt...");
    axios
      .post("http://localhost:5000/login", formik.values)
      .then((res) => {
        console.log("user login :", res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("err:", err);
        //setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          margin="auto"
          maxWidth={400}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc">
          <Typography>Login</Typography>
          <TextField
            margin="normal"
            type="email"
            name="username"
            label="email"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <TextField
            margin="normal"
            type="password"
            name="password"
            label="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <Box>{message}</Box>
          <Button
            variant="contained"
            sx={{ marginTop: 3 }}
            onClick={handleSubmit}>
            Login
          </Button>
          <Button onClick={() => navigate("/register")}>SignUP</Button>
        </Box>
      </form>
    </div>
  );
}
