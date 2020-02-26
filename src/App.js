import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setBoards } from './redux/app-reduser';
import HomeContainer from './components/home-component/home-container';
import BoardContainer from './components/board-component/board-container';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

function App({ setBoards }) {

  useEffect(() => {
    console.log('Load data from localstorage...');
    setBoards()
  }, []);


  return (
    <BrowserRouter>
      <DndProvider backend={Backend}>
        <div class="container">
          <Route path='/' exact render={() => <HomeContainer />} />
          <Route path='/board/' render={() => <BoardContainer />} />
        </div>
      </DndProvider>
    </BrowserRouter>
  );
}


export default connect(null, { setBoards })(App);
