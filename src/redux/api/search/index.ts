import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchTracks: build.query<SEARCH.SearchResponse, SEARCH.SearchRequest>({
      query: (params) => ({
        url: "/search",
        method: "GET",
        params: {
          q: params,
          type: "track",
          limit: 10,
        },
      }),
    }),
  }),
});

export const { useSearchTracksQuery } = api;
