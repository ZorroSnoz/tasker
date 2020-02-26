import React, { useState } from 'react';
import ModalWindowContainer from '../../modal-window-container/modal-window';
import ModalTaskWindow from '../modal-task-window/modal-window';

let BoardItemTask = ({
    taskName,
    taskDiscription,
    id,
    idTargetBoardItem,
    deleteTaskInBoardItem,
    doneTask,
    done
}) => {

    const [toggle, setToggle] = useState('modal-close');
    let closeWindow = () => {
        setToggle('modal-close')
    };

    let doneToggle = (done) => {
        if (done) {
            return 'done-task';
        };
        return '';
    };
    return (<>
        <div className={`task-item rounded bg-secondary ${doneToggle(done)}`}>
            <h6 className='text-light'>{taskName}</h6>
            <div>
                <button onClick={() => { setToggle('') }} type="button" class="btn btn-sm btn-outline-light">Views</button>
                {!done
                    ? <button onClick={() => { doneTask(id, idTargetBoardItem, true) }} type="button" class="btn btn-sm btn-outline-light">Done!</button>
                    : <button onClick={() => { doneTask(id, idTargetBoardItem, false) }} type="button" class="btn btn-sm btn-outline-light">Back</button>}

                <button onClick={() => { deleteTaskInBoardItem(id, idTargetBoardItem) }} type="button" class="btn btn-sm btn-outline-light">Delete</button>
            </div>
        </div>
        <ModalWindowContainer Component={ModalTaskWindow} toogle={toggle} data={{ taskDiscription, taskName, closeWindow }} />
    </>
    )
};

export default BoardItemTask;