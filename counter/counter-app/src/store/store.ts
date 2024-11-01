import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import formSlice from "./formSlice";
import activitySlice from "./activitySlice";
import { watchFetchActivity } from "../sagas/activitySaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    form: formSlice,
    activity: activitySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchActivity);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
