import React from 'react';
import styles from '../../styles/common/NavigationButton.module.css';

const NavigationButton = (props) => {
    const handleLogIn = () => {
        console.log("CALLING FUNCTION")
        window.location.href= props.path;
      }
  return (
    <div>
    <button className= {`${styles.navigateButton}`} onClick={handleLogIn}> {props.next} </button>
    </div>
  )
}

export default NavigationButton