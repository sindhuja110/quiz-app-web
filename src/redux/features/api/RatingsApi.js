import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const RatingsApi = createApi({
  reducerPath: "RatingsApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["RATINGS"],
  endpoints: (build) => ({
    getRatings: build.query({
      query: ({page,search}) => ({
        url: `/admin/viewRating/${search}?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["RATINGS"],
    }),
  

   
    deleteRatings: build.mutation({
      query: (id) => ({
        url: `/admin/deleteRating/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["RATINGS"],
    }),
  }),
});

export const { useGetRatingsQuery,useDeleteRatingsMutation} = RatingsApi;
