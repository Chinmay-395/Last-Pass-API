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
        payload: token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: error
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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT,
        payload: null
    };
};

export const authLogin = (username, password) => (dispatch) => {
    console.log("Authentication is enabled")
    dispatch(authStart());
    axios.post(`http://127.0.0.1:8000/api/login/`, {
        username: username,//actually an email field will go here
        password: password

    }).then(response => {
        const token = response.data.token;
        const name = response.data.name
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
        localStorage.setItem('name', name);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(fetchLpData());
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
    console.log('auth check state ran')
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            console.log(">>>> dispatching logout")
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

//fetch all the data
export const fetchLpData = () => (dispatch) => {
    dispatch(lpDataLoading());
    console.log("<<<<<<<<< FETCH METHOD RAN >>>>>>>>")
    let getData = async () => {
        await axios.get('http://127.0.0.1:8000/lastpass_api/feed_clone/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
            .then(response => dispatch(add_lpData(response.data)))
            .catch(error => setTimeout(dispatch(lpDataFailed(error.message)), 10000))
    }
    getData()
}

//Create operation
export const createLpData = (name_of_website, url_of_website, username_for_website,
    password_for_website, notes) => (dispatch) => {
        let createData = async () => {
            let the_data = {
                "name_of_website": name_of_website,
                "url_of_website": url_of_website,
                "username_for_website": username_for_website,
                "password_for_website": password_for_website,
                "notes": notes
            }
            await axios.post('http://127.0.0.1:8000/lastpass_api/feed_clone/', the_data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            }).then(response => {
                console.log("The response", response.data)
                dispatch(fetchLpData())
            })// .then(dispatch(fetchLpData()))
                .catch(error => dispatch(lpDataFailed(error.message)))
        }
        createData()
    }
//Update operation
export const updateLpData = (id, name_of_website, url_of_website, username_for_website,
    password_for_website, notes) => (dispatch) => {
        console.log("The data that came in", id, name_of_website, url_of_website, username_for_website,
            password_for_website, notes)
        if (id !== null && id !== undefined) {
            dispatch(lpDataLoading());
            console.log("RAN inside update actionCreator")
            console.log("the token", localStorage.getItem('token'))
            let the_data = {
                "name_of_website": name_of_website,
                "url_of_website": url_of_website,
                "username_for_website": username_for_website,
                "password_for_website": password_for_website,
                "notes": notes
            }
            let updateData = async () => {
                await axios.patch(`http://127.0.0.1:8000/lastpass_api/feed_clone/${id}/`, the_data, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                }).then(response => {
                    console.log("The response ------->", response)
                    dispatch(fetchLpData())
                }).catch(error => {
                    dispatch(lpDataFailed(error.message))
                })
            }
            updateData()
            setTimeout(function () { alert("check the status at server") }, 5000)
        } else {
            dispatch(lpDataFailed("_______The data passed was incorrect_______"))
        }

    }

//Delete operation
export const deleteLpData = (id) => (dispatch) => {
    dispatch(lpDataLoading())
    let deleteData = async () => await axios.delete(`http://127.0.0.1:8000/lastpass_api/feed_clone/${id}/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    }).then(response => {
        console.log("The response ------->", response)
        dispatch(fetchLpData())
    }).catch(error => {
        dispatch(lpDataFailed(error.message))
    })
    deleteData()
}

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
    return {
        type: actionTypes.ADD_PASSDATA,
        payload: lp_data
    }
}
