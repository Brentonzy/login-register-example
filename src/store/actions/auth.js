import axios from 'axios';
import * as actionTypes from './actionTypes';

export const auth = (email, password, isLogin) => {
    return dispatch => {
        // dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }
        
        let url = 'http://localhost:4000/register';
        
        if(isLogin){
            url = 'http://localhost:4000/login';
        }

        axios.post(url, authData)
            .then(response=>{
                if(response.status===200){
                    localStorage.setItem('token', response.data.token);
                    dispatch(authSuccess(response.data.token));
                }    
            })
            .catch(err=>{
                dispatch(authFail(err.response));
            })
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.LOG_OUT
    }
}


