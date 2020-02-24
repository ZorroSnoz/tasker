import React, { useState } from 'react';
import deleteIcon from '../../../image/bin.svg';
import { Redirect } from 'react-router-dom';

let HomeItem = ({ id, nameBoard, discription, deleteBoard }) => {
    const [click, setClick] = useState(0);
    if (click === 0) {
        return (
            <tr onClick={() => setClick(1)}>
                <td scope="row">{nameBoard}</td>
                <td>{discription}</td>
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