import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const GeneralNotificationApi = createApi({
  reducerPath: "NotificationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["NOTIFICATION"],
  endpoints: (build) => ({
    getNotification: build.query({
      query: ({page,search}) => ({
        url: `/admin/viewGeneralNotification?page=${page}&search=${search}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["NOTIFICATION"],
    }),
  

    addNotification: build.mutation({
      query: ({ title, body, image }) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);
    
        return {
          url: `/sendNotification`,
          method: "POST",
          body: formData,
          headers: {
           
          },
        };
      },
      invalidatesTags: ["NOTIFICATION"],
    }),
    
    deleteNotification: build.mutation({
      query: (id) => ({
        url: `/deleteNotification/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["NOTIFICATION"],
    }),
  }),
});

export const { useGetNotificationQuery,useDeleteNotificationMutation,
    useAddNotificationMutation} = GeneralNotificationApi;
