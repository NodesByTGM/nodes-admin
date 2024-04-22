/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
// import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const generalApi: any = createApi({
  reducerPath: "generalApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Auth.LoginURL}`,
          method: "post",
          body: data,
        };
      },
    }),
    forgotPassword: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Auth.ForgotPasswordURL}`,
          method: "post",
          body: data,
        };
      },
    }),

    resetPassword: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Auth.ResetPasswordURL}/${data?.accountId}/${data?.token}`,
          method: "post",
          body: data.payload,
        };
      },
    }),

    uploadFile: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Uploads.UploadFile}`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useLoginMutation,
  useUploadFileMutation,
} = generalApi;
