import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => 'articles', 
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
