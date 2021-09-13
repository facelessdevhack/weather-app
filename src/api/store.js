import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from './index';

const initialState = {};

const middleware = [thunk];

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);
export {store,persistor}