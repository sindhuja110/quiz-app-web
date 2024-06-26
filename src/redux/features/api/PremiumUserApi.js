import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const PremiumUserApi = createApi({
  reducerPath: "PremiumUserApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["PREMINUMUSERAPI"],
  endpoints: (build) => ({
    getPremiumUser: build.query({
      query: ({page,search}) => ({
        url: `/admin/viewPremiumUsers/${search}?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["PREMINUMUSERAPI"],
    }),
   

   
  }),
});

export const { useGetPremiumUserQuery} = PremiumUserApi;
