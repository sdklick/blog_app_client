import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./services/articlesApi";
import { categoryApi } from "./services/categoryApi";

const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(categoryApi.middleware),
});

export default store;
