import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/home-component/home';
import Board from './components/board-component/board';
import { changeToggleModalBoard, deleteBoard, setBoards } from './redux/app-reduser';

function App({ appData, changeToggleModalBoard, deleteBoard, setBoards }) {

  useEffect(() => {
    setBoards()
  }, []);


  return (
    <BrowserRouter>
      <div class="container">
        <Route path='/' exact render={() =>
          <Home
            deleteBoard={deleteBoard}
            appData={appData}
            changeToggleModalBoard={changeToggleModalBoard} />} />
        <Route path='/board/' render={() => <Board />} />
      </div>
    </BrowserRouter>
  );
}


let mapStateToProps = (state) => {
  return {
    appData: state.appPage
  }
};

export default connect(mapStateToProps, { changeToggleModalBoard, deleteBoard, setBoards })(App);
