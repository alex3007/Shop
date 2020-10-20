const ADD_BUING_PRUDUCT = 'ADD_BUING_PRUDUCT';
const ADD_DELETE_PRUDUCT = 'ADD_DELETE_PRUDUCT';

let initialState = {
    buingProducts: []
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
        default:
            return state;
    }
}

export const addBuingProductAC = (newItem) => ({type: ADD_BUING_PRUDUCT, newItem});
export const addDeleteProductAC = (newId) => ({type: ADD_DELETE_PRUDUCT, newId});


export default buyItemReducer;