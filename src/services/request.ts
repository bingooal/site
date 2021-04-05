import axios, { AxiosRequestConfig } from 'axios';

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
}: RequestConfig) => {
  const options = {
    method,
    baseURL,
    url,
    params,
    headers,
    data,
  } as AxiosRequestConfig;
  const response = await axios.request(options);
  return response.data;
};

export default makeRequest;
