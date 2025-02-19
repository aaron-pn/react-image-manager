import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE } from '@/utils/constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_BASE,
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: ({ page = 1, limit = 10 }) =>
        `v2/list?page=${page}&limit=${limit}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page;
      },
    }),
    getPhotoId: builder.query({
      query: (id) => {
        return `id/${id}/info`;
      },
    }),
  }),
});

export const { useGetPhotosQuery, useGetPhotoIdQuery } = api;
