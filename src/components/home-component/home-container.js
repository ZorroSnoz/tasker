import React from 'react';
import { connect } from 'react-redux';
import { changeToggleModalBoard, deleteBoard } from '../../redux/app-reduser';
import Home from './home';
import HomeItem from './home-item/item';

let HomeContainer = ({ appData, changeToggleModalBoard, deleteBoard }) => {
  let toogleModalWindow = appData.toggleModalWindows.homeWindow;
  let boardsArr = appData.data.map(item =>
    (<HomeItem
      id={item.id}
      nameBoard={item.nameBoard}
      discription={item.discription}
      deleteBoard={deleteBoard}
    />));

  let openModalWindow = () => {
    changeToggleModalBoard(true)
  };


  return (<>
    <Home
      toogleModalWindow={toogleModalWindow}
      boardsArr={boardsArr}
      openModalWindow={openModalWindow} />
  </>
  )
};

let mapStateToProps = (state) => {
  return {
    appData: state.appPage
  }
};

export default connect(mapStateToProps, { changeToggleModalBoard, deleteBoard })(HomeContainer);