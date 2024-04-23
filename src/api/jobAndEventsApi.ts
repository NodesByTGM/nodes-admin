/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const jobAndEventsApi: any = createApi({
  reducerPath: "jobAndEventsApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getJobs: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}`,
          method: "get",
        };
      },
    }),
    getMyJobs: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/mine`,
          method: "get",
        };
      },
    }),

    getAppliedJobs: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/applied`,
          method: "get",
        };
      },
    }),

    getJobById: builder.query<any, any>({
      query: (id) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/${id}`,
          method: "get",
        };
      },
    }),

    // Use AppConfig.API_ENDPOINTS.Job.MyJobsUrl, no need for params,
    // also pagination has been added to all these
    getBusinessUserJobs: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.MyJobsUrl}`,
          method: "get",
        };
      },
    }),
    createJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}`,
          method: "post",
          body: data,
        };
      },
    }),
    applyToJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/apply/${data?.id}`,
          method: "post",
          body: data,
        };
      },
    }),
    deleteJob: builder.mutation<any, any>({
      query: (id) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/${id}`,
          method: "delete",
        };
      },
    }),

    editJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/${data?.id}`,
          method: "put",
          body: data,
        };
      },
    }),

    // getBusinessUserEvents: builder.query<any, any>({
    //   query: (params) => {
    //     return {
    //       url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}?${new URLSearchParams(
    //         cleanObject(params)
    //       )}`,
    //       method: "get",
    //     };
    //   },
    // }),

    getBusinessUserEvents: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${
            AppConfig.API_ENDPOINTS.Events.BaseURL
          }/mine?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),

    getEvents: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}`,
          method: "get",
        };
      },
    }),
    getMyEvents: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/mine`,
          method: "get",
        };
      },
    }),

    getEventById: builder.query<any, any>({
      query: (id) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/${id}`,
          method: "get",
        };
      },
    }),

    createEvent: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}`,
          method: "post",
          body: data,
        };
      },
    }),

    editEvent: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/${data?.id}`,
          method: "put",
          body: data,
        };
      },
    }),

    deleteEvent: builder.mutation<any, any>({
      query: (id) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/${id}`,
          method: "delete",
        };
      },
    }),

    saveJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/save/${data.id}`,
          method: "post",
          body: data,
        };
      },
    }),
    unSaveJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/unsave/${data.id}`,
          method: "post",
          body: data,
        };
      },
    }),

    getSavedJobs: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/saved`,
          method: "get",
        };
      },
    }),

    saveEvent: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/save/${data.id}`,
          method: "post",
          body: data,
        };
      },
    }),
    unSaveEvent: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/unsave/${data.id}`,
          method: "post",
          body: data,
        };
      },
    }),

    getSavedEvents: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/saved`,
          method: "get",
        };
      },
    }),
  }),
});

export const {
  useGetMyJobsQuery,
  useGetJobsQuery,
  useGetAppliedJobsQuery,
  useGetJobByIdQuery,
  useGetBusinessUserJobsQuery,
  useCreateJobMutation,
  useApplyToJobMutation,
  useDeleteJobMutation,
  useEditJobMutation,
  useGetMyEventsQuery,
  useGetEventsQuery,
  useGetBusinessUserEventsQuery,
  useCreateEventMutation,
  useEditEventMutation,
  useGetEventByIdQuery,
  useDeleteEventMutation,
  useSaveJobMutation,
  useGetSavedJobsQuery,
  useSaveEventMutation,
  useGetSavedEventsQuery,
  useUnSaveEventMutation,
  useUnSaveJobMutation,
} = jobAndEventsApi;
