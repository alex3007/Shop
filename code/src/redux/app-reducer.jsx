
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

export default appReducer;