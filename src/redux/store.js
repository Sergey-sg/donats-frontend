import { configureStore } from "@reduxjs/toolkit";
import jarReducer from "./jar/jar.slice";
import jarsReducer from "./jar/jars.slice";
import bannerReducer from "./jar/banner.slice";
import tagsReducer from "./jar/tags.slice"

const store = configureStore({
  reducer: {
    jar: jarReducer,
    jars: jarsReducer,
    banner: bannerReducer,
    tags: tagsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
const RootState = store.getState();
// Inferred type: { jar: JarState }
const AppDispatch = store.dispatch;

export { RootState, AppDispatch };
export default store;
