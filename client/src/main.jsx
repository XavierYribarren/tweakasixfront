import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './features/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './context/authContext'



// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore(persistedReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['register'], // Exclude 'register' action from serialization
    }, }),
});
const persistor = persistStore(store);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
