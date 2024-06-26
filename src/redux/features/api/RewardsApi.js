import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const RewardsApi = createApi({
  reducerPath: "RewardsApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["REWARDS"],
  endpoints: (build) => ({
    getRewards: build.query({
      query: ({page,search}) => ({
        url: `/admin/rewardsPage/${search}?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["REWARDS"],
    }),
   

   
  }),
});

export const { useGetRewardsQuery} = RewardsApi;
