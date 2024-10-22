import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "../../components";

export const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      alert("Sign in successful");
      navigate("/");
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div id="sign-in-container">
      <form id="form-container">
        <h1>Sign In</h1>

        <TextField
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign In
        </Button>

        <Link
          to="/sign-up"
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
        >
          Do not have an account?
        </Link>
      </form>
    </div>
  );
};
