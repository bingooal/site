// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosRequestConfig } from 'axios';
import { setup } from 'axios-cache-adapter';

const api = setup({
  cache: {
    maxAge: 0, // by default, don't cache
    // debug: true,
  },
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
