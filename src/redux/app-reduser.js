import {generatorId} from '../service/generator-id';
import {local} from '../service/local-storage';

let checkToogleModalWindow = (action) => {
    if (action === true) {
        return '';
    } else {
        return 'modal-close';
    }
};


const CHANGE_MODAL_WINDOW_NEW_BOARD = 'CHANGE_MODAL_WINDOW_NEW_BOARD';
const ADD_NEW_BOARD = 'ADD_NEW_BOARD';
const DELETE_BOARD = 'DELETE_BOARD';
const SET_BOARTS_OF_LOCALSTORAGE = 'SET_BOARTS_OF_LOCALSTORAGE';

let initialState = {
    data: [
        {
            id: '1',
            nameBoard: 'Gebo',
            discription: 'project in development',
            dataBoard: []
        },
        {
            id: '2',
            nameBoard: 'Week',
            discription: 'tasks for week',
            dataBoard: []
        }
    ],
    toggleModalWindows: {
        homeWindow: 'modal-close'
    }
};


const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODAL_WINDOW_NEW_BOARD: {
            return {
                ...state,
                toggleModalWindows: {
                    ...state.toggleModalWindows,
                    homeWindow: checkToogleModalWindow(action.toggle)
                }
            };
        };
        case ADD_NEW_BOARD: {
            let newBoard = {
                id: generatorId(),
                nameBoard: action.data.nameBoard,
                discription: action.data.discription,
                dataBoard: []
            };
            let newBoardsData = [...state.data];
            newBoardsData.push(newBoard);
            local.setItem(newBoardsData);
            return {
                ...state,
                data: newBoardsData
            };
        };
        case DELETE_BOARD: {
            let newBoards = state.data.filter(item => item.id != action.id);
            local.setItem(newBoards);
            return {
                ...state,
                data: newBoards
            };
        };
        case SET_BOARTS_OF_LOCALSTORAGE: {

            if (local.getItem() === null) {
                return {
                    ...state
                };
            }

            return {
                ...state,
                data: local.getItem()
            };
        }
        default: {
            return state;
        };
    }

};


export let changeToggleModalBoard = (toggle) => ({ type: CHANGE_MODAL_WINDOW_NEW_BOARD, toggle });
export let addNewBoard = (data) => ({ type: ADD_NEW_BOARD, data });
export let deleteBoard = (id) => ({ type: DELETE_BOARD, id });
export let setBoards = () => ({ type: SET_BOARTS_OF_LOCALSTORAGE});


export default appReduser;