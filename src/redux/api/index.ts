import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SPOTIFY_API_URL}/v1`,
  prepareHeaders: async (headers) => {
    const { data } = await axios("/api/auth/get-access-token");
    if (data) {
      headers.set("Authorization", `Bearer ${data.accessToken}`);
    }

    return headers;
  },
});

const baseQueryExtended: BaseQueryFn = async (agrs, api, extraOptions) => {
  const result = await baseQuery(agrs, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  tagTypes: ["me"],
  endpoints: () => ({}),
});
