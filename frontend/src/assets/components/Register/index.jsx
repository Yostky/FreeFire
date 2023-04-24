import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const response = await axios.post("/api/v1/users", {
        user: {
          email: email,
          password: password,
          name: name,
        },
      });

      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form className={styles.form}>
      <h2>Register</h2>
      <div className={styles.formGroup}>
        <input
          type="name"
          className={styles.formControl}
          id="name"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          className={styles.formControl}
          id="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="password"
          className={styles.formControl}
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button" className={styles.btn} onClick={handleOnClick}>
        Register
      </button>
    </form>
  );
};

export default Register;
