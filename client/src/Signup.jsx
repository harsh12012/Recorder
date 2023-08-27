import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password && !name) {
      setError("Fill all required fields");
      return;
    } else if (!name) {
      setError("Please enter name");
      return;
    } else if (!email && !password) {
      setError("Please enter email and password");
      return;
    } else if (!password && !name) {
      setError("Please enter password and name");
      return;
    } else if (!email) {
      setError("Please enter email");
      return;
    } else if (!password) {
      setError("Please enter password");
      return;
    }
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);

        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
        setError("Fill all required fields");
      });
  };

  return (
    <div className="d-flex justify-content-center align-item-center bg- secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button
          type="submit"
          className="btn btn-success w-100 rounded-0"
          onClick={handleSubmit}
        >
          Register
        </button>

        {/* </form> */}
        {/* {error.length && <h4 style={{ color: "red" }}>{error}</h4>} */}
        <p>Already have an Account</p>
        <Link
          to="/Login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;

//git remote set-url origin https://harsh12012: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@github.com/harsh12012/recorder.git
