import { generatorId } from '../service/generator-id';
import { local } from '../service/local-storage';

let checkToogleModalWindow = (action) => {
    if (action === true) {
        return '';
    } else {
        return 'modal-close';
    }
};

let takeIndexInArr = (arr, id) => {

    let arrIndex = null;
    for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) {
            arrIndex = i;
        }
    }
    return arrIndex;
};

let deepCopyState = (state) => {
    let newState = { ...state, data: [...state.data] };
    newState.data[state.currentBoardIndex] = { ...state.data[state.currentBoardIndex] };
    newState.data[state.currentBoardIndex].dataBoard = [...state.data[state.currentBoardIndex].dataBoard];
    return newState;
};

let functionDuplicationKiller = (state, targetId) => {

    let newState = deepCopyState(state);
    let boardItems = newState.data[state.currentBoardIndex].dataBoard;
    let boardItemIndex = takeIndexInArr(boardItems, targetId);
    boardItems[boardItemIndex] = JSON.parse(JSON.stringify(state.data[state.currentBoardIndex].dataBoard[boardItemIndex]));

    return {newState, boardItems, boardItemIndex}
};

const CHANGE_MODAL_WINDOW_NEW_BOARD = 'CHANGE_MODAL_WINDOW_NEW_BOARD';
const CHANGE_MODAL_WINDOW_ADD_BOARD_ITEM = 'CHANGE_MODAL_WINDOW_ADD_BOARD_ITEM';
const CHANGE_MODAL_WINDOW_ADD_TASK = 'CHANGE_MODAL_WINDOW_ADD_TASK';
const ADD_NEW_BOARD = 'ADD_NEW_BOARD';
const ADD_NEW_BOARD_ITEM = 'ADD_NEW_BOARD_ITEM';
const ADD_NEW_TASK = 'ADD_NEW_TASK';
const DELETE_BOARD = 'DELETE_BOARD';
const DELETE_BOARD_ITEM = 'DELETE_BOARD_ITEM';
const DELETE_TASK = 'DELETE_TASK';
const SET_BOARTS_OF_LOCALSTORAGE = 'SET_BOARTS_OF_LOCALSTORAGE';
const SET_BOARD_INDEX = 'SET_BOARD_INDEX';
const SET_TARGET_BOARD_ITEM_ID = 'SET_TARGET_BOARD_ITEM_ID';
const DONE_TASK = 'DONE_TASK';
const MOVE_TASK = 'MOVE_TASK';

let initialState = {
    data: [
        {
            id: '1a95b359-9533-42d0-a81e-57e9898b0c9d',
            nameBoard: 'Gebo',
            discription: 'i must finish project',
            dataBoard: [
                {
                    id: '234123',
                    nameBoardItem: 'Stream tasks',
                    boardItemTasks: [
                        {
                            done: false,
                            id: '3252364',
                            taskName: 'refact change-ad-page',
                            taskDiscription: 'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                        },
                        {
                            done: false,
                            id: '32523asdfasd64',
                            taskName: 'add dalogs page',
                            taskDiscription: 'add dialogs page form comunicate people'
                        },
                    ]
                },
                {
                    id: '51252',
                    nameBoardItem: 'In works',
                    boardItemTasks: [
                        {
                            done: false,
                            id: '325232sd64',
                            taskName: 'add adaptiv design',
                            taskDiscription: 'ea commodo consequat. Duis aute irure dolor in reprehenderit'
                        },
                        {
                            done: false,
                            id: '3252433264',
                            taskName: 'add valodation in redux forms',
                            taskDiscription: 'Excepteur sint occaecat cupidatat non proident'
                        },
                    ]
                }
            ]
        },
        {
            id: '16fd48a5-1aab-4c2a-8d68-97e64803366e',
            nameBoard: 'Week',
            discription: 'my tasks in week',
            dataBoard: []
        }
    ],
    toggleModalWindows: {
        homeWindow: 'modal-close',
        addBoardItemWindow: 'modal-close',
        addNewTaskWindow: 'modal-close'
    },
    currentBoardId: '',
    currentBoardIndex: null,
    targetBoardItemId: '',
    targetBoardItemIndex: null
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
        case CHANGE_MODAL_WINDOW_ADD_BOARD_ITEM: {
            return {
                ...state,
                toggleModalWindows: {
                    ...state.toggleModalWindows,
                    addBoardItemWindow: checkToogleModalWindow(action.toggle)
                }
            };
        };
        case CHANGE_MODAL_WINDOW_ADD_TASK: {
            return {
                ...state,
                toggleModalWindows: {
                    ...state.toggleModalWindows,
                    addNewTaskWindow: checkToogleModalWindow(action.toggle)
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
        case ADD_NEW_BOARD_ITEM: {
            ///// deep copy state
            let newState = deepCopyState(state);

            let newBoardItem = {
                id: generatorId(),
                nameBoardItem: action.data.nameBoardItem,
                boardItemTasks: []
            };
            let newBoardItems = [...state.data[state.currentBoardIndex].dataBoard];

            newBoardItems.push(newBoardItem);
            newState.data[state.currentBoardIndex].dataBoard = newBoardItems;

            local.setItem(newState.data);
            return newState;
        };
        case DELETE_BOARD: {
            let newBoards = state.data.filter(item => item.id != action.id);
            local.setItem(newBoards);
            return {
                ...state,
                data: newBoards
            };
        };
        case DELETE_BOARD_ITEM: {
            let newState = deepCopyState(state);
            let newBoardsItem = newState.data[newState.currentBoardIndex].dataBoard.filter(item => item.id != action.id);

            newState.data[newState.currentBoardIndex].dataBoard = newBoardsItem;
            return newState;
        };
        case DELETE_TASK: {
            let {newState, boardItems, boardItemIndex} = functionDuplicationKiller(state, action.idTargetBoardItem);

            let newTasks = boardItems[boardItemIndex].boardItemTasks.filter(item => item.id != action.id);

            boardItems[boardItemIndex].boardItemTasks = newTasks;

            return newState;
        };
        case ADD_NEW_TASK: {

            let newTask = {
                done: false,
                id: generatorId(),
                taskName: action.data.nameTask,
                taskDiscription: action.data.discription
            }

            let {newState, boardItems, boardItemIndex} = functionDuplicationKiller(state, state.targetBoardItemId);
           
            boardItems[boardItemIndex].boardItemTasks.push(newTask);

            local.setItem(newState.data);
            return newState;
        };
        case SET_BOARTS_OF_LOCALSTORAGE: {

            if (local.getItem() === null) {
                return {
                    ...state
                };
            } else if (state.data.length > 0) {
                return {
                    ...state
                };
            }

            return {
                ...state,
                data: local.getItem()
            };
        }
        case SET_BOARD_INDEX: {
            let currentBoardId = action.id;
            let currentBoardIndex = takeIndexInArr(state.data, currentBoardId);
            return {
                ...state,
                currentBoardId: currentBoardId,
                currentBoardIndex: currentBoardIndex
            };
        }
        case SET_TARGET_BOARD_ITEM_ID: {

            return {
                ...state,
                targetBoardItemId: action.id
            };
        }
        case DONE_TASK: {

            let {newState, boardItems, boardItemIndex} = functionDuplicationKiller(state, action.idTargetBoardItem)

            let newTasks = boardItems[boardItemIndex].boardItemTasks.filter(item => {
                if (item.id === action.id) {
                    item.done = action.toggle
                } return item
            });

            boardItems[boardItemIndex].boardItemTasks = newTasks;

            return newState;
        }
        case MOVE_TASK: {
            if (action.idTargetBoardItem === action.IdNewTargetBoardItem) {
                return state
            }

            let {newState, boardItems, boardItemIndex} = functionDuplicationKiller(state, action.idTargetBoardItem)

            let targetTask;
            let newTasks = boardItems[boardItemIndex].boardItemTasks.filter(item => {
                if (item.id === action.id) {
                    targetTask = item;
                } else {
                    return item;
                }
            });
            boardItems[boardItemIndex].boardItemTasks = newTasks;

            let NewBoardItemIndex = takeIndexInArr(boardItems, action.IdNewTargetBoardItem);

            boardItems[NewBoardItemIndex].boardItemTasks.push(targetTask);
            return newState;
        }
        default: {
            return state;
        };
    }

};


export let changeToggleModalBoard = (toggle) => ({ type: CHANGE_MODAL_WINDOW_NEW_BOARD, toggle });
export let changeToggleModalAddBoardItem = (toggle) => ({ type: CHANGE_MODAL_WINDOW_ADD_BOARD_ITEM, toggle });
export let changeToggleModalAddTask = (toggle) => ({ type: CHANGE_MODAL_WINDOW_ADD_TASK, toggle });
export let addNewBoard = (data) => ({ type: ADD_NEW_BOARD, data });
export let addNewBoardItem = (data) => ({ type: ADD_NEW_BOARD_ITEM, data });
export let addNewTask = (data) => ({ type: ADD_NEW_TASK, data });
export let deleteBoard = (id) => ({ type: DELETE_BOARD, id });
export let deleteBoardItem = (id) => ({ type: DELETE_BOARD_ITEM, id });
export let deleteTask = (id, idTargetBoardItem) => ({ type: DELETE_TASK, id, idTargetBoardItem });
export let setBoards = () => ({ type: SET_BOARTS_OF_LOCALSTORAGE });
export let setBoardIndex = (id) => ({ type: SET_BOARD_INDEX, id });
export let setTargetBoardItemId = (id) => ({ type: SET_TARGET_BOARD_ITEM_ID, id });
export let doneTask = (id, idTargetBoardItem, toggle) => ({ type: DONE_TASK, id, idTargetBoardItem, toggle });
export let moveTask = (id, idTargetBoardItem, IdNewTargetBoardItem) => ({ type: MOVE_TASK, id, idTargetBoardItem, IdNewTargetBoardItem });


export default appReduser;