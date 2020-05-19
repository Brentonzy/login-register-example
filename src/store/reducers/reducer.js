import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    error: null
};

const authSuccess = (state, action) => {
    return({
        ...state,
        token: action.token
    })
}

const authFail = (state, action) => {
    return({
        ...state,
        error: action.error
    })
}

const logout = state => {
    return({
        ...state,
        token: null
    })
}
const reducer = (state = initialState, action) => {
    switch( action.type ){
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.LOG_OUT: return logout(state);
        default:
            return state;
    }
}

export default reducer;