import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const singlearticlesApi = createApi({
  reducerPath: 'singlearticlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getArticleById: builder.query({
      query: (id) => `articles/${id}`,
    }),
  }),
});

export const { useGetArticleByIdQuery } = singlearticlesApi;