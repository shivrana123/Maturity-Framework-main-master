import React from "react";
import headerLogo from '../../images/NagarroLogo.svg';
import styles from '../../styles/layouts/Header.module.css';

const Header = () => {
  return (
    <div className={`${styles.headerWrapper}`}>
      <div className={`${styles.headerLogo}`}>
        <img className= {`${styles.cover}`} src= {headerLogo} alt= "NagarroLogo"/>
      </div>
      <div className= {`${styles.headerText}`}>
        <h1>DevOps Maturity Test</h1></div>
      <div></div>
      DevOps Maturity Test
    </div>
  );
};

export default Header;
