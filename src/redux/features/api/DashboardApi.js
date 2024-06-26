import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const DashboardApi = createApi({
  reducerPath: "DashboardApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["DASHBOARD"],
  endpoints: (build) => ({
    getDashboard: build.query({
      query: () => ({
        url: `/admin/dashboard `,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["DASHBOARD"],
    }),
   
   

   
  }),
});

export const { useGetDashboardQuery} = DashboardApi;
