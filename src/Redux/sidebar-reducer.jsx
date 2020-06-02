let initialState = {
    trees: [
        {id: 1, path: "/controllers", name: "Контроллеры"},
        {id: 2, path: "/sencors", name: "Датчики"},
        {id: 3, path: "/interfaces", name: "Разъемы"},
        {id: 4, path: "/cables", name: "Кабели"},
        {id: 5, path: "/modules", name: "Модули"}],
    currentPath: ''

};

export const pathAC = (path) => ({type: 'NEW_PATH', newPath: path});


const sidebarReducer = (state = initialState, action) => {

    if (action.type === 'NEW_PATH') {
        return {
            ...state, currentPath: action.newPath
    }
    } else {
        return {...state}
    }
};


export default sidebarReducer;