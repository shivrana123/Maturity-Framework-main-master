import React from 'react';
import NavigationButton from '../common/NavigationButton';
import ContentInputBox from '../common/ContentInputBox';
import styles from '../../styles/layouts/IntroductionPage.module.css';
import Header from './Header';

const Instructions = () => {
  return (
    <div className={`${styles.introHeader}`}>
        <Header></Header>
      <ContentInputBox header="Instructions" content= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      <div style={{width:"100px"}}>
      <NavigationButton next= "NEXT" path= "/Questionnairre"/>
      </div>
    </div>
  )
}

export default Instructions