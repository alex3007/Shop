import {api} from "../components/api/api";
import {isError, isFetching, setItems} from "./buyItem-reducer";

let initialState = {
    products: [],
    isFetching: true
};

export const setProducts = (products) => ({type: 'SET_PRODUCTS', products});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching });

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, products: action.products};
        case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
};


export const getProducts = () => async (dispatch) => {
    try {
        dispatch(isFetching(true));
        const res = await api.getItems();
        dispatch(setProducts(res.data));
        dispatch(isFetching(false));
    } catch (e) {
        dispatch(isError(true));
    }
};

export default appReducer;