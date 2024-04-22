/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
// import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const usersApi: any = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    userPost: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Community.Post}`,
          method: "post",
          body: data,
        };
      },
    }),
   
  }),
});

export const { useUserPostMutation,  } =
  usersApi;
