import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const TrainApi = createApi({
  reducerPath: "TrainApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["TRAIN"],
  endpoints: (build) => ({
    getTrain: build.query({
      query: ({ page, search }) => ({
        url: `/admin/trainNames?page=${page}&search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["TRAIN"],
    }),
    getTrainById: build.query({
      query: (id) => ({
        url: `/admin/trainNames/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["TRAIN"],
    }),
    addTrain: build.mutation({
        query: (data) => ({
          url: `/admin/addTrain`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["TRAIN"],
      }),
     

    editTrain: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateTrain/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TRAIN"],
    }),
    deleteTrain: build.mutation({
      query: (id) => ({
        url: `/admin/deleteTrain/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TRAIN"],
    }),
  }),
});

export const { useGetTrainQuery, useGetTrainByIdQuery,useDeleteTrainMutation,
    useAddTrainMutation,useGetTrainBySearchDataQuery,useEditTrainMutation
} = TrainApi;
