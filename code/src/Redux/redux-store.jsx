import {applyMiddleware,combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import buyItemReducer from "./buyItem-reducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";


let reducers = combineReducers({

    items:appReducer,
    buyItem:buyItemReducer,
    auth:authReducer

});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;