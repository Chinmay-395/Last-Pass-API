//React redux imports
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
////React-Redux-Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//custom imports
////importing all the reducers
/* import { Auth_reducer } from './auth_reducer'
 import { Lp_Data_reducer } from './lp_data_reducer'*/
import rootReducer from './root_reducer'


export const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk, logger)
        )
    );
    const persistor = persistStore(store);
    return { store, persistor };
}
