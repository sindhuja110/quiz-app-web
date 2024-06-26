import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const TransactionhistoryApi = createApi({
  reducerPath: "Transactionhistory",
  baseQuery: customFetchBase,
  tagTypes: ["TRANSACTIONHISTORY"],
  endpoints: (builder) => ({
    getTransactionhistory: builder.query({
      query: ({page,search}) => ({
        url: `/admin/viewTransactions/${search}?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["TRANSACTIONHISTORY"],
    }),

    addTransactionhistory: builder.mutation({
      query: ({ phoneNumber, upiId, modeOfPayment, amount,transactionId,image,paidOn }) => {
        const formData = new FormData();
        formData.append('phoneNumber', phoneNumber);
        formData.append('upiId', upiId);
        formData.append('modeOfPayment', modeOfPayment);
        formData.append('amount', amount);
        formData.append('transactionId', transactionId);
        formData.append('paidOn', paidOn);
        formData.append('image', image);
    
        return {
          url: `/admin/addTransaction`,
          method: "POST",
          body: formData,
          headers: {
           
          },
        };
      },
      invalidatesTags: ["TRANSACTIONHISTORY"],
    }),
    

    deleteTransactionhistory: builder.mutation({
      query: (id) => ({
        url: `/admin/deleteTransaction/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TRANSACTIONHISTORY"],
    }),



  
  }),
});

export const { useGetTransactionhistoryQuery,useDeleteTransactionhistoryMutation,useAddTransactionhistoryMutation} = TransactionhistoryApi;
