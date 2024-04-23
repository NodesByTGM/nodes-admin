import { configureStore } from "@reduxjs/toolkit";
import { usersApi, contentApi, communityApi, profileApi, projectApi, generalApi, jobAndEventsApi } from "../api";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import userReducer from "../api/reducers/userSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const reducers = combineReducers({
  [profileApi?.reducerPath]: profileApi?.reducer,
  user: userReducer,
  [projectApi?.reducerPath]: projectApi?.reducer,
  [generalApi?.reducerPath]: generalApi?.reducer,
  [jobAndEventsApi?.reducerPath]: jobAndEventsApi?.reducer,
  [communityApi?.reducerPath]: communityApi?.reducer,
  [contentApi?.reducerPath]: contentApi?.reducer,
  [usersApi?.reducerPath]: usersApi?.reducer,

  
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(profileApi?.middleware)
      .concat(projectApi?.middleware)
      .concat(generalApi?.middleware)
      .concat(jobAndEventsApi?.middleware)
      .concat(communityApi?.middleware)
      .concat(contentApi?.middleware)
      .concat(usersApi?.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
