//React redux imports
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
//custom imports
import { Auth_reducer } from './auth_reducer'
import { Lp_Data_reducer } from './lp_data_reducer'

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth_reducer,
            lp_data: Lp_Data_reducer
        }), applyMiddleware(thunk, logger)
    );
    return store;
}
