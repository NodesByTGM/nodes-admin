/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
// import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const projectApi: any = createApi({
  reducerPath: "projectApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
  
    getUserProjects: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Project.Projects}`,
          method: "get",
          
        };
      },
    }),
    getMyProjects: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Project.Projects}/mine`,
          method: "get",
          
        };
      },
    }),
    createUserProject: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Project.Projects}`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetMyProjectsQuery, useGetUserProjectsQuery, useCreateUserProjectMutation } = projectApi;
