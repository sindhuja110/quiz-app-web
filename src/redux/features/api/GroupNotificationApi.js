import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const GroupNotificationApi = createApi({
  reducerPath: "GroupNotificationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["GROUPNOTIFICATION"],
  endpoints: (build) => ({
    getGroupNotification: build.query({
      query: ({page,search}) => ({
        url: `/admin/viewGroupNotifications?page=${page}&search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["GROUPNOTIFICATION"],
    }),

   
     

    deleteGroupNotification: build.mutation({
      query: (id) => ({
        url: `/admin/deleteGroupNotifications/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["GROUPNOTIFICATION"],
    }),
  }),
});

export const { useGetGroupNotificationQuery,useDeleteGroupNotificationMutation,
    } = GroupNotificationApi;
