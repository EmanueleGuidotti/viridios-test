import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../settings/axios.instance";

export const forecastApi = createApi({
  reducerPath: "forecast",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Forecast"],
  endpoints: (builder) => ({
    getForecast: builder.query<any, { from: string; to: string }>({
      query: ({ from, to }) => ({
        url: `/intensity/${from}/${to}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetForecastQuery } = forecastApi;
