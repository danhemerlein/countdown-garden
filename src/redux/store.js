import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'countdowns',
  storage,
  whitelist: ['countdowns']
};

// const persistConfig = { key: 'fake key', storage, blacklist: ['countdowns'] };

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, composeEnhancer(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { persistor, store };
