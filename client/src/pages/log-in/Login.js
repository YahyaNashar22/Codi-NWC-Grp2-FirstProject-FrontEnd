import React from "react";
import loginModule from "./login.module.css";
import hidden from "../../assets/images/hidden.png";
import googleG from "../../assets/images/G.png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className={loginModule.wrapper}>
        <h1 className={loginModule.login}>Log in</h1>
        <h1 className={loginModule.header}>Welcome to HotelXpress</h1>
        <form method="POST" className={loginModule.form}>
          <label className={loginModule.inpLabel}>
            Email
            <input
              className={loginModule.inp}
              placeholder="Enter your email"
              type="email"
            />
          </label>
          <label className={loginModule.inpLabel}>
            Password
            <input
              className={loginModule.inp}
              placeholder="Enter your password"
              type="password"
            />
            <span className={loginModule.hidden}>
              <img src={hidden} />
            </span>
          </label>
          <fieldset className={loginModule.rememberfield}>
            <label className={loginModule.remember}>
              <input type="checkbox" className={loginModule.checkme} />
              <p className={loginModule.remembermetxt}>Remember me</p>
            </label>
            <a href="#" className={loginModule.frgtpass}>
              Forgot password?
            </a>
          </fieldset>
          <button className={loginModule.signupBtn}>Log in</button>
          <p className={loginModule.query}>Don't have an account?</p>
          <Link to="signUp" className={loginModule.signup}>
            Sign up
          </Link>
          <p className={loginModule.or}>Or</p>
          <button className={loginModule.gSign}>
            <span className={loginModule.glogo}>
              <img src={googleG} />
            </span>
            Log in with Google
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
