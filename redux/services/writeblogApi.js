import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const writeblogApi = createApi({
  reducerPath: "writeblogApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    writeBlog: builder.mutation({
      query: (articleData) => ({
        url: "writeblog",
        method: "POST",
        body: articleData,
      }),
    }),
  }),
});

export const { useWriteBlogMutation } = writeblogApi;
