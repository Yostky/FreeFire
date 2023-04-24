import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/login", {
        email,
        password,
      });
      const { token, user_id } = response.data;
      localStorage.setItem("jwt", token);
      navigate(`/settings/${user_id}`);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className={styles.formGroup}>
        <input
          type="email"
          className={styles.formControl}
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="password"
          className={styles.formControl}
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className={styles.signupText}>
        Don't have an account?{" "}
        <a
          href="/register"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Signup
        </a>
      </p>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
};

export default Login;
