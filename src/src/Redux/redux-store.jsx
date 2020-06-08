import {combineReducers, createStore} from "redux";
import itemsReducer from "./items-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({

    sidebar:sidebarReducer,
    items:itemsReducer

});

let store = createStore(reducers);

export default store;