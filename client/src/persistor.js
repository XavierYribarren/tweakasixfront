import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import your reducer
import rootReducer from './reducers';

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  version:1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore(persistedReducer);
