import {api} from "../components/api/api";

let initialState = {
    userEmail: null,
    isAuth: false,
    isOpen: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'TOGGLE_IS_OPEN':
            return {
                ...state,
                isOpen: action.isOpen
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userEmail, isAuth) => ({
    type: 'SET_USER_DATA',
    payload: {userEmail, isAuth}
});
export const toggleIsOpen = (isOpen) => ({type: 'TOGGLE_IS_OPEN', isOpen});

export const getLogin = () => async (dispatch) => {
    let email = localStorage.getItem('userEmail')
    if(email){
    let response = await api.login(email);
    dispatch(setAuthUserData(email,true))}
}

export const login = (email) => async (dispatch) => {
    let response = await api.login(email);
    dispatch(setAuthUserData(email,true))
    localStorage.setItem('userEmail',email)
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(null,  false));
    localStorage.removeItem('userEmail')
}

export default authReducer;