import {api} from "../components/api/api";

let initialState = {
    products: [],
    isFetching: true,
    isError: false
};


export const setProducts = (products) => ({type: 'SET_PRODUCTS', products});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching });
export const toggleIsError = (isError) => ({type: 'TOGGLE_IS_ERROR', isError });


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, products: action.products};
        case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_ERROR': {
            return { ...state, isError: action.isError}
        }
        default:
            return state
    }
};


export const getProducts = () => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        const res = await api.getItems();
        dispatch(setProducts(res.data));

        setTimeout(()=>dispatch(toggleIsFetching(false)), 1000);

    } catch (e) {
        dispatch(toggleIsError(true));
    }
};

export default appReducer;