
let initialState = {
    products: [],
    currentSoulPath: '/'
};

export const newSoulPathAC = (path) => ({type: 'NEW_SOUL_PATH', newSoulPath: path});
export const setProducts = (products) => ({type: 'SET_PRODUCTS', products});

const itemsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NEW_SOUL_PATH':
            return {...state, currentSoulPath: action.newSoulPath};
        case 'SET_PRODUCTS':
            return {...state, products: action.products};
        default:
            return state
    }
};

export default itemsReducer;