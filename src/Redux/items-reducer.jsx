let initialState = {
    controllers: [
        {id: 1, path: "/con1", name: "C1"},
        {id: 2, path: "/con2", name: "C2"},
        {id: 3, path: "/con3", name: "C3"},
        {id: 4, path: "/con4", name: "C4"},
        {id: 5, path: "/con5", name: "C5"},
        {id: 6, path: "/con6", name: "C6"},
        {id: 7, path: "/con7", name: "C7"},
        {id: 8, path: "/con8", name: "C8"},
        {id: 9, path: "/con9", name: "C9"},
        {id: 10, path: "/con10", name: "C10"},
        {id: 11, path: "/con11", name: "C11"},
        {id: 12, path: "/con12", name: "C12"},
        {id: 13, path: "/con13", name: "C13"},
        {id: 14, path: "/con14", name: "C14"},
        {id: 15, path: "/con15", name: "C15"}
        ],
    sencors: [
        {id: 1, path: "/con1", name: "C1"},
        {id: 2, path: "/con2", name: "C2"},
        {id: 3, path: "/con3", name: "C3"},
        {id: 4, path: "/con4", name: "C4"},
        {id: 5, path: "/con5", name: "C5"},
        {id: 6, path: "/con6", name: "C6"},
        {id: 7, path: "/con7", name: "C7"},
        {id: 8, path: "/con8", name: "C8"},
        {id: 9, path: "/con9", name: "C9"},
        {id: 10, path: "/con10", name: "C10"},
        {id: 11, path: "/con11", name: "C11"},
        {id: 12, path: "/con12", name: "C12"},
        {id: 13, path: "/con13", name: "C13"},
        {id: 14, path: "/con14", name: "C14"},
        {id: 15, path: "/con15", name: "C15"}
        ],
    interfaces: [
        {id: 1, path: "/con1", name: "C1"},
        {id: 2, path: "/con2", name: "C2"},
        {id: 3, path: "/con3", name: "C3"},
        {id: 4, path: "/con4", name: "C4"},
        {id: 5, path: "/con5", name: "C5"},
        {id: 6, path: "/con6", name: "C6"},
        {id: 7, path: "/con7", name: "C7"},
        {id: 8, path: "/con8", name: "C8"},
        {id: 9, path: "/con9", name: "C9"},
        {id: 10, path: "/con10", name: "C10"},
        {id: 11, path: "/con11", name: "C11"},
        {id: 12, path: "/con12", name: "C12"},
        {id: 13, path: "/con13", name: "C13"},
        {id: 14, path: "/con14", name: "C14"},
        {id: 15, path: "/con15", name: "C15"}
         ],
    cables: [
        {id: 1, path: "/con1", name: "C1"},
        {id: 2, path: "/con2", name: "C2"},
        {id: 3, path: "/con3", name: "C3"},
        {id: 4, path: "/con4", name: "C4"},
        {id: 5, path: "/con5", name: "C5"},
        {id: 6, path: "/con6", name: "C6"},
        {id: 7, path: "/con7", name: "C7"},
        {id: 8, path: "/con8", name: "C8"},
        {id: 9, path: "/con9", name: "C9"},
        {id: 10, path: "/con10", name: "C10"},
        {id: 11, path: "/con11", name: "C11"},
        {id: 12, path: "/con12", name: "C12"},
        {id: 13, path: "/con13", name: "C13"},
        {id: 14, path: "/con14", name: "C14"},
        {id: 15, path: "/con15", name: "C15"}
        ],
    modules: [
        {id: 1, path: "/con1", name: "C1"},
        {id: 2, path: "/con2", name: "C2"},
        {id: 3, path: "/con3", name: "C3"},
        {id: 4, path: "/con4", name: "C4"},
        {id: 5, path: "/con5", name: "C5"},
        {id: 6, path: "/con6", name: "C6"},
        {id: 7, path: "/con7", name: "C7"},
        {id: 8, path: "/con8", name: "C8"},
        {id: 9, path: "/con9", name: "C9"},
        {id: 10, path: "/con10", name: "C10"},
        {id: 11, path: "/con11", name: "C11"},
        {id: 12, path: "/con12", name: "C12"},
        {id: 13, path: "/con13", name: "C13"},
        {id: 14, path: "/con14", name: "C14"},
        {id: 15, path: "/con15", name: "C15"}
    ],
    currentSoulPath:''
};

export const newSoulPathAC = (path) => ({type: 'NEW_SOUL_PATH', newSoulPath: path});


const itemsReducer = (state = initialState,action) => {

    if (action.type === 'NEW_SOUL_PATH') {
        return {
            ...state, currentSoulPath: action.newSoulPath
        }
    } else {
        return {...state}
    }
};

export default itemsReducer;