import React from 'react';
import Header from './Header'; 
import styles from '../../styles/layouts/IntroductionPage.module.css';
import NavigationButton from '../common/NavigationButton';
import ContentInputBox from '../common/ContentInputBox';

function IntroductionPage() {
 
  return (
    <div className={`${styles.introHeader}`}>
      <Header></Header>
      {/* <div className={`${styles.introPageContent}`}>
        <h1>Introduction</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div> */}
      <ContentInputBox header="Introduction" content= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      <div style={{width:"100px"}}>
      <NavigationButton next= "NEXT" path= "/logIn"/>
      </div>
      
      {/* <button className='button' onClick={handleLogIn}>NEXT</button> */}
    </div>
  )
}

export default IntroductionPage