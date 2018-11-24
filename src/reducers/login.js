import {LOGIN, LOGOUT} from '../actions/login';

const initialState = {
    isAuthenticated: false
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                isAuthenticated: true
            });
        case LOGOUT:
            return Object.assign({}, state, {
                isAuthenticated: false
            })

        default:
            return state;
    }
}
