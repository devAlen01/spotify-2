import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getNewReleases: build.query<
      ALBUM.GetNewReleaseResponse,
      ALBUM.GetNewReleaseRequest
    >({
      query: () => ({
        url: "/browse/new-releases",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNewReleasesQuery } = api;
