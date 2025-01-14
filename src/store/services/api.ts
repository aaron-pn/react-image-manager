import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL_BASE = 'https://picsum.photos/v2/list';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_BASE,
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => 'photos',
    }),
  }),
});

export const { useGetPhotosQuery } = api;
