import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./services/articlesApi";
import { categoryApi } from "./services/categoryApi";
import { singlearticlesApi } from "./services/singleArticleApi";

const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [singlearticlesApi.reducerPath]: singlearticlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(categoryApi.middleware)
      .concat(singlearticlesApi.middleware),
});

export default store;
