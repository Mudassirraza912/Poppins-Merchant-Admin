import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';
import storage from 'redux-persist/lib/storage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ["userReducer"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export const persistore = persistStore(store);
