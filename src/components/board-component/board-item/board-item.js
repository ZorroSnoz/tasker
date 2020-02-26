import React from 'react';
import deleteIcon from '../../../image/bin.svg';
import BoardItemTask from '../board-item-task/board-item-task';

let BoardItem = ({ 
    nameBoardItem, 
    boardItemTasks, 
    openModalAddTask, 
    id, 
    deleteBoardItem,
    deleteTaskInBoardItem,
    doneTask
 }) => {

    let boardItemTasksArr = boardItemTasks.map(item => <BoardItemTask
        id={item.id}
        taskName={item.taskName}
        done={item.done}
        taskDiscription={item.taskDiscription}
        idTargetBoardItem={id}
        deleteTaskInBoardItem={deleteTaskInBoardItem}
        doneTask={doneTask}
 />)
    return (
        <div className='col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'>
            <div className='board-item rounded shadow bg-dark'>
                <div className='board-item-header'>
                    <h4 className='text-light'>{nameBoardItem}</h4>
                    <img onClick={()=>{deleteBoardItem(id)}} src={deleteIcon}></img>
                </div>
                {boardItemTasksArr}
                <p onClick={()=>openModalAddTask(id)} className='text-white-50'>Add new tast...</p>
            </div>
        </div>
    )
};

export default BoardItem;