import React, {useState} from 'react';
import ModalWindowContainer from '../../modal-window-container/modal-window';
import ModalTaskWindow from '../modal-task-window/modal-window';

let BoardItemTask = ({taskName, taskDiscription, id, idTargetBoardItem, deleteTaskInBoardItem}) => {

    const [toggle, setToggle] = useState('modal-close');
    let closeWindow = () => {
        setToggle('modal-close')
    };
return (<>
    <div className='task-item rounded bg-secondary'>
    <h6 className='text-light'>{taskName}</h6>
    <div>
        <button onClick={()=> {setToggle('')}} type="button" class="btn btn-sm btn-outline-light">Views</button>
        <button type="button" class="btn btn-sm btn-outline-light">Done!</button>
        <button onClick={() => {deleteTaskInBoardItem(id, idTargetBoardItem)}} type="button" class="btn btn-sm btn-outline-light">Delete</button>
    </div>
</div>
<ModalWindowContainer Component={ModalTaskWindow} toogle={toggle} data={{taskDiscription, taskName, closeWindow}} />
</>
)};

export default BoardItemTask;