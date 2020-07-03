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
    /*let getData = async () => {
        await*/return axios.get('http://127.0.0.1:8000/lastpass_api/feed_clone/', {
        // method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token 5b01d4b70a5f82081ba49ce3ed1b6168d8bf1052`
        }
    })
        //THis one needs to be achieved
        // .then(response => {
        //     if (response.ok) {
        //         console.log("Took too much time")
        //         alert(response)
        //         return response;
        //     } else {
        //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //         console.log("the error:", error)
        //         error.response = response;
        //         throw error;
        //     }
        // }, error => {
        //     var errmess = new Error(error.message);
        //     throw errmess;
        // })
        .then(response => dispatch(add_lpData(response.data)))
        .catch(error => setTimeout(dispatch(lpDataFailed(error.message)), 10000))
}
//THis is working prototype
// .then(response => {
//     // let data = response.data

//     console.log(response)
//     console.log("The data:", response.data)
// }).then(response => {
//     response.json()
//     console("THe response", response.json)
// })
// .then(data => {
//     console.log('Success:', data);
// })
// .catch((error) => {
//     console.error('Error:', error);
// });
// getData()
// }

export const lpDataLoading = () => {
    return {
        type: actionTypes.PASSDATA_LOADING
    }
}

export const lpDataFailed = (errMess) => {
    return {
        type: actionTypes.PASSDATA_FAILED,
        payload: errMess
    }
}

export const add_lpData = (lp_data) => {
    console.log("I ran")
    return {
        type: actionTypes.ADD_PASSDATA,
        payload: lp_data
    }
}
