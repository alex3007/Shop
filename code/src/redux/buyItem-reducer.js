import {updateObjectInArray} from "../utils/objectUpdater";
import {api} from "../components/api/api";

let initialState = {
    buingItems: [],
    isFetching: false,
    isError: false
};

const buyItemReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_ITEMS':
            return {
                ...state,
                buingItems: action.items
            };

        case 'ADD_ITEM':
            let newItem = action.item;
            return {
                ...state,
                buingItems: [...state.buingItems, newItem]
            };
        case 'DELETE_ITEM':
            let newId = action.id;
            return {
                ...state, buingItems: state.buingItems.filter(p => p.id != newId)
            };
        case 'UPDATE_ITEM':
            return {
                ...state,
                buingItems: updateObjectInArray(state.buingItems, action.id,
                    {quantity: action.text})
            }
        case 'IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'IS_ERROR': {
            return {...state, isError: action.isError}
        }
        default:
            return state;
    }
}
export const setItems = (items) => ({type: 'SET_ITEMS', items});
export const addItem = (item) => ({type: 'ADD_ITEM', item});
export const deleteItem = (id) => ({type: 'DELETE_ITEM', id});
export const updateItem = (id, text) => ({type: 'UPDATE_ITEM', id, text});
export const isFetching = (isFetching) => ({type: 'IS_FETCHING', isFetching});
export const isError = (isError) => ({type: 'IS_ERROR', isError});


export const getBuingItems = () => async (dispatch) => {
    try {
        dispatch(isFetching(true));
        const res = await api.getBuingItems();
        dispatch(setItems(res.data.items));
        dispatch(isFetching(false));
    } catch (e) {
        dispatch(isError(true));
    }
};

export const addBuingItem = (text) => async (dispatch) => {
    try {
        dispatch(isFetching(true));
        const res = await api.addBuingItem(text);
        dispatch(addItem(res.data.item));
        dispatch(isFetching(false));

    } catch (e) {
        dispatch(isError(true));
    }
};
export const deleteBuingItem = (id) => async (dispatch) => {
    try {
        dispatch(isFetching(true));
        const res = await api.deleteBuingItem(id);
        dispatch(deleteItem(res.data.id));
        dispatch(isFetching(false));

    } catch (e) {
        dispatch(isError(true));
    }
};
export const updateBuingItem = (id, text) => async (dispatch) => {
    try {
        dispatch(isFetching(true));
        const res = await api.updateBuingItem(id, text);
        dispatch(updateItem(res.data.id, res.data.text));
        dispatch(isFetching(false));

    } catch (e) {
        dispatch(isError(true));
    }
};


export default buyItemReducer;