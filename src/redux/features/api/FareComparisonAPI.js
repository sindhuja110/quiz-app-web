import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const FareComparisonApi = createApi({
  reducerPath: "FareComparison",
  baseQuery: customFetchBase,
  tagTypes: [" FARECOMPARISON"],
  endpoints: (build) => ({
    getFareComparisonFrom: build.query({
      query: (search) => ({
        url: `/info/getStation?search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["FARECOMPARISON"],
    }),

    getFareComparisonTo: build.query({
      query: (search) => ({
        url: `/info/getStation?search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["FARECOMPARISON"],
    }),


   
  }),
});

export const { useGetFareComparisonFromQuery,useGetFareComparisonToQuery} = FareComparisonApi;
