import React, { useState } from 'react';
import deleteIcon from '../../../image/bin.svg';
import { Redirect } from 'react-router-dom';

let HomeItem = ({ id, nameBoard, discription, deleteBoard }) => {
    const [click, setClick] = useState(0);
    let clickInRow = () => setClick(1);
    
    if (click === 0) {
        return (
            <tr >
                <td onClick={clickInRow} scope="row">{nameBoard}</td>
                <td onClick={clickInRow}>{discription}</td>
                <td className='d-flex justify-content-center'><img onClick={() => deleteBoard(id)} src={deleteIcon} /></td>
            </tr>
        )
    }
    else {
        return (
            <Redirect to={`/board/${id}`} />
        )
    }
};

export default HomeItem;