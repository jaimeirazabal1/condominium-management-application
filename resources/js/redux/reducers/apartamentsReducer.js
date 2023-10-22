import { GETALL_SUCCESS,
    GETALL_FAIL } from '../actions/types';

const initialState = {
    apartaments: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GETALL_SUCCESS:
            return {
                ...state,
                apartaments: action.payload
            };
        case GETALL_FAIL:
            return {
                ...state,
                isAuthenticated: [],
            };
        default:
            return state;
    }
}
