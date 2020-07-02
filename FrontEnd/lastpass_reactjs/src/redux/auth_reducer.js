import * as actionTypes from './ActionTypes';

const initialState = {
    token: null,
    error: null,
    loading: false
}

export const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return { ...state, token: null, error: null, loading: true }
        case actionTypes.AUTH_SUCCESS:
            return { ...state, token: action.payload, error: null, loading: false }
        case actionTypes.AUTH_FAIL:
            return { ...state, token: null, error: action.payload, loading: false }
        case actionTypes.AUTH_LOGOUT:
            return { ...state, token: action.payload, error: null, loading: false }
        default:
            return state;
    }
}