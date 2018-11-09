const initialState = {
    isAuthenticated: false,
    failLogin: false,
    failCheckLogin: false,
    profile: {},
    statusText: null
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER_REQUEST':
            return Object.assign({}, state, {
                'isAuthenticated': false,
                'statusText': null
            });
        case 'LOGIN_USER_SUCCESS':
            return Object.assign({}, state, {
                'isAuthenticated': true,
                'failLogin': false,
                'profile': action.data,
                'statusText': 'You have been successfully logged in.'
            });
        case 'LOGIN_USER_FAILURE':
            return Object.assign({}, state, {
                'isAuthenticated': false,
                'failLogin': true,
                'statusText': 'You have been successfully logged in.'
            });
        case 'LOGOUT_USER':
            return Object.assign({}, state, {
                'isAuthenticated': false,
                'failLogin': false,
                'statusText': 'You have been successfully logged out.'
            });
        case 'LOGIN_CHECK_FAIL':
            return Object.assign({}, state, {
                'isAuthenticated': false,
                'failCheckLogin': true,
                'statusText': 'You have been successfully logged out.'
            });
        default:
            return state;
    }
}
