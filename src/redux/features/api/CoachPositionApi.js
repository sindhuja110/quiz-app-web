import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const CoachPositionApi = createApi({
  reducerPath: "CoachPosition",
  baseQuery: customFetchBase,
  tagTypes: [" COACHPOSITION"],
  endpoints: (build) => ({
    getTrainData: build.query({
      query: (search) => ({
        url: `/info/trainNames?search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["COACHPOSITION"],
    }),

   
  }),
});

export const { useGetTrainDataQuery} = CoachPositionApi;
