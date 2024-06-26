import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const NewsApi = createApi({
  reducerPath: "NewsApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["NEWS"],
  endpoints: (build) => ({
    // getNews: build.query({
    //   query: ({cate,lang}) => ({
    //     url: `/news/addNewsInDB?category=${cate}&lang=${lang}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["NEWS"],
    // }),
    
    getNewsTable: build.query({
      query: (page) => ({
        url: `/news/allNewsInDB?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["NEWS"],
    }),
  

    deleteNews: build.mutation({
      query: (id) => ({
        url: `/news/deleteNewsInDB/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["NEWS"],
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsTableQuery,useDeleteNewsMutation,
   
} = NewsApi;
