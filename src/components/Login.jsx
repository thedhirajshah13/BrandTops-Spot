import React, { useContext, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

const Login = ({ authenticated, setauthenticated }) => {
  const { setuserDetails, userDetails } = useContext(Context);
  const [inputHandler, setinputHandler] = useState({});

  const Navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setinputHandler((values) => ({ ...values, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: inputHandler.username,
          password: inputHandler.password,
          // expiresInMins: 60, // optional
          //   'kminchelle'
          // '0lelplR'
        }),
      });
      const datadetails = await data.json();
      // console.log(data.json());
      if (data.status === 200) {
        setuserDetails(datadetails);

        setauthenticated(true);
        Navigate("/home");
        console.log(userDetails);
      } else {
        setauthenticated(false);
        alert("wrong Credential");
      }
    } catch (error) {}
  }

  return (
    <>
      <div className="login">
        <div className="loginBox">
          <form onSubmit={handleSubmit}>
            <h2>Login Page</h2>

            <input
              type="text"
              name="username"
              value={inputHandler.username}
              onChange={handleChange}
            />

            <label className="">Username</label>

            <input
              type="text"
              name="password"
              value={inputHandler.password}
              onChange={handleChange}
            />

            <label>Password</label>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
