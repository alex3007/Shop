import * as data from '../Assets/data';

let initialState = {data, currentSoulPath:'/'
};

export const newSoulPathAC = (path) => ({type: 'NEW_SOUL_PATH', newSoulPath: path});


const itemsReducer = (state = initialState, action) => {

    if (action.type === 'NEW_SOUL_PATH') {
        return {
            ...state, currentSoulPath: action.newSoulPath
        }
    } else {
        return {...state}
    }
};

export default itemsReducer;