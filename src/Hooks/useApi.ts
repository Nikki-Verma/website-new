import { getErrorFromApi } from "@/util/helperFunction";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export interface Params {
  [key: string]: any;
}

export interface Headers {
  [key: string]: any;
}

const fetcher = async (
  url: string,
  params: Params,
  headers: Headers,
  signal: AbortSignal,
): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      params,
      headers,
      signal,
    });

    return response.data;
  } catch (error: any) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      throw new Error(getErrorFromApi(error));
    }
  }
};

export const useFetchData = (
  url: string,
  params: Params = {},
  headers: Headers = {},
  customQueryOptions: any = {
    enabled: true,
    refetchInterval: false,
  },
): UseQueryResult<any, unknown> => {
  const queryOptions: UseQueryOptions<any, unknown> = {
    queryKey: ["customFetch", url, params, headers],
    queryFn: ({ signal }) => fetcher(url, params, { ...headers }, signal),
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...customQueryOptions,
  };

  return useQuery(queryOptions);
};
