import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getArtistsSeveral: builder.query<
      ARTIST.GetArtistsResponse,
      ARTIST.GetArtistsRequest
    >({
      query: () => ({
        url: `/me/following`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArtistsSeveralQuery } = api;
