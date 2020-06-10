import {combineReducers, createStore} from "redux";
import itemsReducer from "./items-reducer";


let reducers = combineReducers({

    items:itemsReducer

});

let store = createStore(reducers);

export default store;