import React from "react";
import Form from "../Form/Form.jsx";
import "../Form/Form.css";
import Navbar from "../Navbar/Navbar.jsx";

function Login() {
  return (
    <>
      <Navbar/>
      <Form type="Login" />
    </>
  );
}

export default Login;
