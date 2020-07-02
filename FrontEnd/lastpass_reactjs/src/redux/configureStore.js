//React redux imports
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
//custom imports
import { auth_reducer } from './auth_reducer'

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            auth: auth_reducer
        }), applyMiddleware(thunk, logger)
    );
    return store;
}
