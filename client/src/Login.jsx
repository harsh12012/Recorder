import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  // const validation = (email, password) => {
  //   if (email.length === -1 || password.length == -1) {
  //     setError("fill all required fields");
  //   } else handleSubmit();
  // };
  const handleSubmit = (e) => {
    // setError("");
    e.preventDefault();
    if (!email && !password) {
      setError("Please enter email and password");
      return;
    } else if (!email) {
      setError("Please enter email");
      return;
    } else if (!password) {
      setError("Please enter password");
      return;
    }
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
        // setError("invalid");
      });
  };
  return (
    <div className="d-flex justify-content-center align-item-center bg- secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          {/* <h1>{error}</h1> */}
        </form>
        <p>Don't have an Account</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
export default Login;
