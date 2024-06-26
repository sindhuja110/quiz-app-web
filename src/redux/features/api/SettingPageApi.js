import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const SettingImageApi = createApi({
  reducerPath: "SettingImageApi",
  baseQuery: customFetchBase,
  tagTypes: ["SETTINGIMAGE"],
  endpoints: (build) => ({
    getSettingImage: build.query({
      query: () => ({
        url: `/admin/viewBanner`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["SETTINGIMAGE"],
    }),

    deleteCarosuel: build.mutation({
      query: (index) => ({
        url: `/admin/deleteCarousel/65bca70d45f5ff99f43a2a57/${index}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["SETTINGIMAGE"],
    }),
  })
});

export const { useGetSettingImageQuery, useDeleteCarosuelMutation } = SettingImageApi;
