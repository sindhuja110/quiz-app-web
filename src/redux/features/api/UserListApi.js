import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const UserListApi = createApi({
  reducerPath: "UserList",
  baseQuery: customFetchBase,
  tagTypes: [" USERLIST"],
  endpoints: (build) => ({
    getUserList: build.query({
      query: ({page,search}) => ({
        url: `/admin/users/${search}?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["USERLIST"],
    }),

  
    addUserList: build.mutation({
      query: (data) => ({
        url: `/register`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["USERLIST"],
    }),

    getEmailList: build.query({
      query: (search) => ({
        url: `/admin/getEmails?search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["USERLIST"],
    }),

    SendMail: build.mutation({
      query: (data) => ({
        url: `/admin/sendEmail`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["USERLIST"],
    }),
  }),
});

export const { useGetUserListQuery,useGetEmailListQuery,useAddUserListMutation,useSendMailMutation} = UserListApi;
