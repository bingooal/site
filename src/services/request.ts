import axios, { AxiosRequestConfig } from 'axios';
import { setupCache } from 'axios-cache-adapter';

export const cacheInstance = setupCache({
  maxAge: 0, // by default, don't cache
  // debug: true,
});

const api = axios.create({
  adapter: cacheInstance.adapter,
});

export type RequestConfig = Omit<AxiosRequestConfig, 'method'> & {
  method: string;
};

const makeRequest = async ({
  method,
  baseURL,
  url,
  params,
  headers,
  data,
  cache,
}: RequestConfig) => {
  const options = {
    method,
    baseURL,
    url,
    params,
    headers,
    data,
    cache,
  } as AxiosRequestConfig;
  const response = await api(options);
  return response.data;
};

export default makeRequest;
