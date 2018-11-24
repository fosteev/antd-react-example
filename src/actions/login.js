//import {url, createFilterUrl, fetchRequest} from './config';
export const LOGIN = 'LOGIN', LOGOUT = 'LOGOUT';



const login = () => {
    return {
        type: LOGIN
    }
};
const logout = () => {
    return {
        type: LOGOUT
    }
};

export  function auth(params, action) {
    return dispatch => dispatch(login());
}

export function exit() {
    return dispatch => dispatch(logout());
}
