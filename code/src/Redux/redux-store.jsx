import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import buyItemReducer from "./buyItem-reducer";


let reducers = combineReducers({

    items:appReducer,
    buyItem:buyItemReducer

});

let store = createStore(reducers);

export default store;