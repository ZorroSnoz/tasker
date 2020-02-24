import React from 'react';
import AddButton from '../add-button/button';
import HomeItem from './home-item/item';
import ModalWindowContainer from '../modal-window-container/modal-window';
import AddBoardWindowContainer from './modal-add-board/modal-window-container';

let Home = ({ appData, changeToggleModalBoard, deleteBoard }) => {
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
    <div className='row d-flex justify-content-center'>
      <div className='col-lg-5 col-sm-10 d-flex justify-content-center'>
        {boardsArr.length !== 0
          ? <table class="table table-dark table-striped table-hover table-custom rounded table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Discription</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {boardsArr}
            </tbody>
          </table>
          : <div></div>}

      </div>
      <div className='col-6'></div>
    </div>
    <AddButton fun={openModalWindow} />
    <ModalWindowContainer 
    Component={AddBoardWindowContainer} 
    toogle={toogleModalWindow} 
    />
  </>
  )
};

export default Home;