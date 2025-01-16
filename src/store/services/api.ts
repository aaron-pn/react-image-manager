import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL_BASE = 'https://picsum.photos/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_BASE,
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => 'v2/list',
    }),
    getPhotoId: builder.query({
      query: (id) => {
        console.log({ id });
        return `id/${id}/info`;
      },
    }),
  }),
});

export const { useGetPhotosQuery, useGetPhotoIdQuery } = api;
