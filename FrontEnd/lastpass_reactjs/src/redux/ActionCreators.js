//authAction will be the ActionCreators for auth_reducer
import * as actionTypes from './ActionTypes';
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authLogin = (username, password) => (dispatch) => {
    dispatch(authStart());
    axios.post(`http://127.0.0.1:8000/api/login/`, {
        username: username,//actually an email field will go here
        password: password

    }).then(response => {
        const token = response.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
    }).catch(error => dispatch(authFail(error.message)))

}

export const authSignup = (username, email, password) => (dispatch) => {
    dispatch(authStart());
    axios.post(`http://127.0.0.1:8000/api/profile/`, {
        username: username,
        email: email,
        password: password
    }).then(response => {
        const token = response.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
    }).catch(error => dispatch(authFail(error.message)))
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}



/* lp_dataAction will be the ActionCreators for lp_data_reducer */

export const fetchLpData = () => (dispatch) => {
    dispatch(lpDataLoading());
    axios.get('http://127.0.0.1:8000/lastpass_api/feed_clone/', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(lp_data => dispatch(add_lpData(lp_data)))
        .catch(error => dispatch(lpDataFailed(error.message)))

}

export const lpDataLoading = () => {
    return {
        type: actionTypes.PASSDATA_LOADING
    }
}

export const lpDataFailed = (errMess) => {
    return {
        type: actionTypes.PASS_FAILED,
        payload: errMess
    }
}

export const add_lpData = (lp_data) => {
    return {
        type: actionTypes.ADD_PASSDATA,
        payload: lp_data
    }
}