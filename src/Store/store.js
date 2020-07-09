import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./combineReducers";
import { composeWithDevTools } from "remote-redux-devtools";
//import { persistStore, persistReducer } from 'redux-persist';

const middlewares = [];

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  //storage: ExpoFileSystemStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'authReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'counterReducer',
  ],
};

//const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares, thunk))
);
//let persistor = persistStore(store);

// export { store,persistor };

export { store };
