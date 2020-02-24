import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import appReduser from './app-reduser';

let redusers = combineReducers(
  {
    form: formReducer,
    appPage: appReduser
  });

const store = createStore(redusers);

window.store = store;
export default store;