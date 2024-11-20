import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendationsTracks: builder.query<
      TRACKS.GetRecommendationsTracksResponse,
      TRACKS.GetRecommendationsTracksRequest
    >({
      query: () => ({
        url: "/recommendations",
        method: "GET",
      }),
    }),
    getTracks: builder.query<TRACKS.GetTracksResponse, TRACKS.GetTracksRequest>(
      {
        query: () => ({
          url: `/tracks`,
          method: "GET",
        }),
      }
    ),
  }),
});

export const { useGetRecommendationsTracksQuery, useGetTracksQuery } = api;
