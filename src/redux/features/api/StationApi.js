import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const StationApi = createApi({
  reducerPath: "StationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["STATION"],
  endpoints: (build) => ({
    getStation: build.query({
      query: ({page,search}) => ({
        url: `/admin/stationNames?page=${page}&search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["STATION"],
    }),
    // getStationSearch: build.query({
    //   query: (search) => ({
    //     url: `/admin/stationNames?search=${search}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["STATION"],
    // }),
    getStationById: build.query({
      query: (id) => ({
        url: `admin/stationNames/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["STATION"],
    }),
    // getStationBySearchData: build.query({
    //   query: (search) => ({
    //     url: `/Station/${search}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Station"],
    // }),

    addStation: build.mutation({
        query: (data) => ({
          url: `/admin/addStation`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["STATION"],
      }),
     

    editStation: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateStation/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["STATION"],
    }),
    deleteStation: build.mutation({
      query: (id) => ({
        url: `/admin/deleteStation/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["STATION"],
    }),
  }),
});

export const { useGetStationQuery, useGetStationByIdQuery,useDeleteStationMutation,
    useAddStationMutation,useGetStationSearchQuery,useEditStationMutation
} = StationApi;
