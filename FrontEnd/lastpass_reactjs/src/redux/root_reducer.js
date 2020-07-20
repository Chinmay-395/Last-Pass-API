import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { Auth_reducer } from './auth_reducer'
import { Lp_Data_reducer } from './lp_data_reducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'lp_data']
}

const rootReducer = combineReducers({
    auth: Auth_reducer,
    lp_data: Lp_Data_reducer
})

export default persistReducer(persistConfig, rootReducer)