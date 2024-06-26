import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const IssueApi = createApi({
  reducerPath: "IssueApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["ISSUE"],
  endpoints: (build) => ({
    getIssue: build.query({
      query: ({page,search}) => ({
        url: `/admin/viewIssues/${search}?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["ISSUE"],
    }),
   

    editIssue: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateIssues/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["ISSUE"],
    }),
    deleteIssue: build.mutation({
      query: (id) => ({
        url: `/admin/deleteIssues/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["ISSUE"],
    }),
  }),
});

export const { useGetIssueQuery, useGetIssueByIdQuery,useDeleteIssueMutation,
    useAddIssueMutation,useGetIssueBySearchDataQuery,useEditIssueMutation
} = IssueApi;
