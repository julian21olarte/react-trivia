import { combineReducers, createStore } from 'redux';
import {list, userData, text, time, nickname} from "./reducers/clickReducer";

const reducer = combineReducers({
   list,
   userData,
   text,
   time,
   nickname
});
export default createStore(reducer);