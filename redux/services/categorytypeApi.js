import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categorytypeApi = createApi({
  reducerPath: 'categorytypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCategoryByName: builder.query({
      query: (categoryName) => `category/${categoryName}`, // dynamic part
    }),
  }),
});

export const { useGetCategoryByNameQuery } = categorytypeApi;
