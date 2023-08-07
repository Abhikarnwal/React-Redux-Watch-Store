import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login", user);

    dispatch(login(user));

    // const { from } = location.state || { from: { pathname: "/" } };

    // navigate(from)

    navigate(-1)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            name="email"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            name="password"
            onChange={handleInput}
          />
        </div>
        <button type="submit" data-testid="login-submit" onClick={handleSubmit}>
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
