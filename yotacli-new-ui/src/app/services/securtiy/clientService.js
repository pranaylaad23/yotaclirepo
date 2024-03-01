import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
    console.log(token);
  },

  endpoints: (builder) => ({
    getClientDetails: builder.query({
      query: () => ({
        url: "clients/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetClientDetailsQuery } = clientApi;
