import React from 'react';
import styles from '../../styles/layouts/IntroductionPage.module.css';

const ContentInputBox = (props) => {
  return (
    
    <div className={`${styles.introPageContent}`}>
        <h1>{props.header}</h1>
        <p>
          {props.content}   </p>
      </div>
  )
}

export default ContentInputBox