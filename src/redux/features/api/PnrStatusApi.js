import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const PnrStatusApi = createApi({
  reducerPath: "PnrStatus",
  baseQuery: customFetchBase,
  tagTypes: [" PNRSTATUS"],
  endpoints: (build) => ({
    getPnrStatus: build.query({
      query: (pnr) => ({
        url: `/info/trigger-pnr/${pnr}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["PNRSTATUS"],
    }),

    
   
  }),
});

export const { useGetPnrStatusQuery} = PnrStatusApi;
