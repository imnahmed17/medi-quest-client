import { config } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${config.server_url}/api/v1` }),
    tagTypes: ['all-supply', 'all-donation'],
    endpoints: (builder) => ({
        getAllSupplies: builder.query({
            query: () => ({
                url: '/supplies',
                method: 'GET',
            }),
            providesTags: ['all-supply'],
        }),
        addSupply: builder.mutation({
            query: (data) => ({
                url: '/supplies',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['all-supply'],
        }),
        getSupply: builder.query({
            query: (id: string) => ({
                url: `/supplies/${id}`,
                method: 'GET',
            }),
            providesTags: ['all-supply'],
        }),
        updateSupply: builder.mutation({
            query: (options) => {
                return {
                    url: `/supplies/${options.id}`,
                    method: 'PUT',
                    body: options.data,
                };
            },
            invalidatesTags: ['all-supply'],
        }),
        removeSupply: builder.mutation({
            query: (id: string) => ({
                url: `/supplies/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['all-supply'],
        }),
        addSupplyDonation: builder.mutation({
            query: (data) => ({
                url: '/donate',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['all-donation'],
        }),
        getSupplyStats: builder.query({
            query: () => ({
                url: '/supply-stats',
                method: 'GET',
            }),
            providesTags: ['all-supply'],
        }),
        getSupplyDonationStats: builder.query({
            query: () => ({
                url: '/donate-stats',
                method: 'GET',
            }),
            providesTags: ['all-donation'],
        }),
    }),
});

export const { 
    useGetAllSuppliesQuery, 
    useAddSupplyMutation, 
    useGetSupplyQuery, 
    useUpdateSupplyMutation, 
    useRemoveSupplyMutation,
    useAddSupplyDonationMutation, 
    useGetSupplyStatsQuery, 
    useGetSupplyDonationStatsQuery,
} = baseApi;