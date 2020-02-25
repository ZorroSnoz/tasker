import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {setBoards} from './redux/app-reduser';
import HomeContainer from './components/home-component/home-container';
import BoardContainer from './components/board-component/board-container';

function App({setBoards}) {

  useEffect(() => {
    console.log('Load data from localstorage...');
    setBoards()
  }, []); 


  return (
    <BrowserRouter>
      <div class="container">
        <Route path='/' exact render={() => <HomeContainer />} />
        <Route path='/board/' render={() => <BoardContainer />} /> 
      </div>
    </BrowserRouter>
  );
}


export default connect(null, {setBoards})(App);
