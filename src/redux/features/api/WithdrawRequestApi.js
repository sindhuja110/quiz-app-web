import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";
export const WithdrawrequestApi = createApi({
  reducerPath: "WithdrawrequestApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["WITHDRAWREQUEST"],
  endpoints: (build) => ({
    getWithdrawrequest: build.query({
      query: ({ page,search}) => ({
        url: `/admin/viewWithdrawRequests/${search}?page=${page}`, 
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWREQUEST"],
    }),

    getNumber: build.query({
      query: (search) => ({
        url: `/admin/usersPhoneNumber?search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWREQUEST"],
    }),    
    
    getFilter: build.query({
      query: () => ({
        url: `/admin/filterCategory`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWREQUEST"],
    }),  

    addFilter: build.mutation({
      query: (data) => ({
        url: `/admin/filterResult`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["WITHDRAWREQUEST"],
    }),

    editWithdrawrequest: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateWithdrawRequests/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["WITHDRAWREQUEST"],
    }),
    deleteWithdrawrequest: build.mutation({
      query: (id) => ({
        url: `/admin/deleteWithdrawRequest/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["WITHDRAWREQUEST"],
    }),
  }),
});

export const { useGetWithdrawrequestQuery, useGetNumberQuery,useGetFilterQuery
  ,useDeleteWithdrawrequestMutation,useEditWithdrawrequestMutation,useAddFilterMutation
} = WithdrawrequestApi;
