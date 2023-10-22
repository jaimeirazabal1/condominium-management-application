import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}
