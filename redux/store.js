import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./services/articlesApi";
import { categoryApi } from "./services/categoryApi";
import { singlearticlesApi } from "./services/singleArticleApi";
import { categorytypeApi } from "./services/categorytypeApi";
import { writeblogApi } from "./services/writeblogApi";

const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [singlearticlesApi.reducerPath]: singlearticlesApi.reducer,
    [categorytypeApi.reducerPath]: categorytypeApi.reducer,
    [writeblogApi.reducerPath]: writeblogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(categoryApi.middleware)
      .concat(singlearticlesApi.middleware)
      .concat(categorytypeApi.middleware)
      .concat(writeblogApi.middleware),
});

export default store;
