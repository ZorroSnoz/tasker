import React, { useState } from 'react';
import ModalWindowContainer from '../../modal-window-container/modal-window';
import ModalTaskWindow from '../modal-task-window/modal-window';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../utils-dnd/utils';

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

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.TASK,
            id: id,
            idTargetBoardItem: idTargetBoardItem
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })

    })
    return (<div ref={drag} className={isDragging ? 'is-draging' : ''}>
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
    </div>
    )
};

export default BoardItemTask;