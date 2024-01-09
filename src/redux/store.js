import { configureStore } from "@reduxjs/toolkit";
import jarReducer from './jar/jar.slice';

const store = configureStore({
  reducer: {
    jar: jarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
const RootState = store.getState();
// Inferred type: { jar: JarState }
const AppDispatch = store.dispatch;

export { RootState, AppDispatch };
export default store;