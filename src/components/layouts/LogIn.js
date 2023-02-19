import React from "react";
import logo from "../../images/NagarroCircularLogo.svg";
import styles from "../../styles/layouts/LogIn.module.css";
import NavigationButton from "../common/NavigationButton";

const LogIn = () => {
  return (
    <div className={`${styles.logInLogo}`}>
      <div>
        <img src={logo} alt="logInLogo" />{" "}
      </div>
      <div className={`${styles.logInInputField}`}>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
      </div>
      <div style={{ width: "100px" }}>
        <NavigationButton next="LOGIN" path="/Instructions" />
      </div>
    </div>
  );
};

export default LogIn;
