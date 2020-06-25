import * as actionTypes from './actionTypes'
import { axios } from 'axios'

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

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`http://127.0.0.1:8000/api/login/`, {
            username: username,//actually email
            password: password,
        }).then(res => {
            const token = res.data.key;
            /*
              --This is to check what is in user
            */
            // console.log(localStorage.getItem('user'))
            const expirationDate = new Date(new Date.getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        }).catch(err => {
            dispatch(authFail(err))
        })
    }
}

// export const authLogin = (username, password) => {
//     return dispatch => {
//         dispatch(authStart());
//         axios.post(`http://127.0.0.1:8000/api/login/`, {
//             username: username,//actually email
//             password: password,
//         }).then(res => {
//             const token = res.data.key;
//             /*
//               --This is to check what is in user
//             */
//             console.log(localStorage.getItem('user'))
//             const expirationDate = new Date(new Date.getTime() + 3600 * 1000);
//             localStorage.setItem('token', token);
//             localStorage.setItem('expirationDate', expirationDate);
//             dispatch(authSuccess(token));
//             dispatch(checkAuthTimeout(3600));
//         }).catch(err => {
//             dispatch(authFail(err))
//         })
//     }
// }


export const authSignup = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`http://127.0.0.1:8000/api/profile/`, {
            username: username,//actually usernanme
            email: email,
            password: password,
        }).then(res => {
            /*
            --I will be dispatching this data from register to
            --to authLogin
            */
            const username_but_email = username;
            const password = password;
            console.log(res.data)
            dispatch(authLogin(username_but_email, password))
        }).catch(err => {
            dispatch(authFail(err))
        })
    }
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
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}