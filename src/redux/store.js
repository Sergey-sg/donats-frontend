import { configureStore } from "@reduxjs/toolkit";
import jarReducer from "./jar/slices/jar.slice";
import jarsReducer from "./jar/slices/jars.slice";
import bannerReducer from "./jar/slices/banner.slice";
import tagsReducer from "./jar/slices/tags.slice"
import jarStatisticReducer from "./jar/slices/jarStatistic.slice"

const store = configureStore({
  reducer: {
    jar: jarReducer,
    jars: jarsReducer,
    jarStatistic: jarStatisticReducer,
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
