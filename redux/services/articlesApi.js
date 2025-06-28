import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api'}),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => 'articles', 
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
