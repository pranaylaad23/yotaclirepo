import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const securityApi = createApi({
  reducerPath: "securityApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      headers.set("Authorization", "Bearer ${token}");
      return headers;
    }
  },
 
  endpoints: (builder) => ({
    getContactDetails: builder.query({
      query: () => ({}),
    }),
  }),
});

export const { useGetContactDetailsQuery } = securityApi;
