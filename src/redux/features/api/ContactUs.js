import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const ContactUsApi = createApi({
    reducerPath: "ContactUsApi",
    baseQuery: customFetchBase,
    tagTypes: ["CONTACTUS"],
    endpoints: (build) => ({
      
      SendContact: build.mutation({
        query: (data) => ({
          url: `user/callbackRequest`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["CONTACTUS"],
      }),
    
     
    }),
  });


export const { useSendContactMutation} = ContactUsApi;
