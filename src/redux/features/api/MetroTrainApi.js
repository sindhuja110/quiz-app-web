import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const MetroTrainApi = createApi({
  reducerPath: "MetroTrainApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["METROTRAIN"],
  endpoints: (build) => ({
    // getChennaiMetro: build.query({
    //   query: ({ page, city}) => ({
    //     url: `/metro/viewAdmin${city}Metro?page=${page}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["METROTRAIN"],
    // }),

    
    getChennaiMetroSearch: build.query({
      query: ({ search, city,page}) => ({
        url: `/metro/viewAdmin${city}Metro?search=${search}&page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["METROTRAIN"],
    }),

    getMetroTrainById: build.query({
      query: ({ id, city }) => ({
        url: `/metro/viewAdmin${city}Metro/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["LOCALTRAIN"],
    }),


    
    addMetroTrain: build.mutation({
      query: ({data,city}) => ({
        url: `/metro/add${city}Metro`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["METROTRAIN"],
    }),

    editMetroTrain: build.mutation({
      query: ({id, city,data }) => ({
        url: `/metro/update${city}Metro/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["METROTRAIN"],
    }),

    deleteMetroTrain: build.mutation({
      query: ({city,id}) => ({
        url: `/metro/delete${city}Metro/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["METROTRAIN"],
    }),
   
   
  }),
});

export const {
    useGetChennaiMetroQuery,
    useDeleteMetroTrainMutation,
    useAddMetroTrainMutation,
    useEditMetroTrainMutation,
    useGetMetroTrainByIdQuery,
    useGetChennaiMetroSearchQuery,
} = MetroTrainApi;
