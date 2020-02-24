import React from 'react';
import AddButton from '../add-button/button';
import backIcon from '../../image/back.svg';
import deleteIcon from '../../image/bin.svg';
import { NavLink } from 'react-router-dom';
import ModalWindowContainer from '../modal-window-container/modal-window';
import ModalTaskWindow from './modal-task-window/modal-window';

let Board = (props) => {
    return <>
        <div className='row'>
            <div className='header-container'>
                <NavLink className='back-button shadow-sm rounded-circle' to='/'><img src={backIcon} /></NavLink>
                <h1>Gebo</h1>
            </div>
        </div>
        <div className='row d-flex jastify-content-center align-content-center'>
            <div className='col col-lg-4 col-sm-6 col-12'>
                <div className='board-item rounded shadow bg-dark'>
                    <div className='board-item-header'>
                        <h4 className='text-light'>Stream tasks</h4>
                        <img src={deleteIcon}></img>
                    </div>
                    <div className='task-item rounded bg-secondary'>
                        <h6 className='text-light'>refact change-ad-page</h6>
                        <div>
                            <button type="button" data-toggle="modal" data-target=".bd-example-modal-sm" class="btn btn-sm btn-outline-light">Views</button>
                            <button type="button" class="btn btn-sm btn-outline-light">Done!</button>
                            <button type="button" class="btn btn-sm btn-outline-light">Delete</button>
                        </div>
                    </div>
                    <div className='task-item rounded bg-secondary'>
                        <h6 className='text-light'>refact change-ad-page</h6>
                        <div>
                            <button type="button" class="btn btn-sm btn-outline-light">Views</button>
                            <button type="button" class="btn btn-sm btn-outline-light">Done!</button>
                            <button type="button" class="btn btn-sm btn-outline-light">Delete</button>
                        </div>
                    </div>
                    <p className='text-white-50'>Add new tast...</p>
                </div>
            </div>
        </div>
        <AddButton />
        <ModalWindowContainer Component={ModalTaskWindow} />
    </>
};

export default Board;