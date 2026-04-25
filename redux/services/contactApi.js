import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    sendContact: builder.mutation({
      query: (contactData) => ({
        url: "contact",
        method: "POST",
        body: contactData,
      }),
    }),
  }),
});

export const { useSendContactMutation } = contactApi;
