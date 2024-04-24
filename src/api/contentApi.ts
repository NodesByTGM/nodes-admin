/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const contentApi: any = createApi({
  reducerPath: "contentApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getContents: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${
            AppConfig.API_ENDPOINTS.Content.GeneralContents
          }?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),

    getContentsForAdmin: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Content.Admin}?${new URLSearchParams(
            cleanObject(params)
          )}`,
          method: "get",
        };
      },
    }),
    getContentById: builder.query<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Content.Admin}/${data?.id}`,
          method: "get",
         
        };
      },
    }),
    createContentForAdmin: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Content.Admin}`,
          method: "post",
          body: data,
        };
      },
    }),
    updateContentForAdmin: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Content.Admin}/${data?.id}`,
          method: "put",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetContentByIdQuery,
  useGetContentsQuery,
  useGetContentsForAdminQuery,
  useCreateContentForAdminMutation,
  useUpdateContentForAdminMutation,
} = contentApi;
