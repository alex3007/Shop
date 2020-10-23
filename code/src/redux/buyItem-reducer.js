const ADD_BUING_PRUDUCT = 'ADD_BUING_PRUDUCT';
const ADD_DELETE_PRUDUCT = 'ADD_DELETE_PRUDUCT';
const ADD_NUM_OF_PRUDUCTS = 'ADD_NUM_OF_PRUDUCTS';


let initialState = {
    buingProducts: [],
};

const buyItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUING_PRUDUCT:
            let newItem = action.newItem;
            return {
                ...state,
                buingProducts: [...state.buingProducts, newItem]
            };
        case ADD_DELETE_PRUDUCT:
            let newId = action.newId;
            return {
                ...state, buingProducts: state.buingProducts.filter(p => p.id != newId)
            };
        case ADD_NUM_OF_PRUDUCTS:
            let num = action.num;
            return {
                ...state, sumQuantity: num
            };
        default:
            return state;
    }
}

export const addBuingProduct = (newItem) => ({type: ADD_BUING_PRUDUCT, newItem});
export const addDeleteProduct = (newId) => ({type: ADD_DELETE_PRUDUCT, newId});
export const addNumOfProducts = (num) => ({type: ADD_NUM_OF_PRUDUCTS, num});


export default buyItemReducer;