import * as actionTypes from './ActionTypes';

const initialState = {
    isLoading: true,
    errMess: null,
    lp_data: []
}
export const Lp_Data_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PASSDATA:
            return { ...state, isLoading: false, errMess: null, lp_data: action.payload }

        case actionTypes.PASSDATA_LOADING:
            return { ...state, isLoading: true, errMess: null, lp_data: [] }

        case actionTypes.PASSDATA_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, lp_data: [] }
        default:
            return state;
    }
}