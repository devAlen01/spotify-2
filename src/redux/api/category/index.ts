import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getCategorySeveral: builder.query<
      CATEGORY.GetCategoryResponse,
      CATEGORY.GetCategoryRequest
    >({
      query: () => ({
        url: "/browse/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategorySeveralQuery } = api;
