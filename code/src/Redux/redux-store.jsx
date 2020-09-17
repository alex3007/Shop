import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";


let reducers = combineReducers({

    items:appReducer

});

let store = createStore(reducers);

export default store;