import axios, { AxiosRequestConfig } from 'axios';

type RequestConfig = Omit<AxiosRequestConfig, 'method'> & {
  method: string;
};

const makeRequest = async ({ method, url, params, headers }: RequestConfig) => {
  const options = {
    method,
    url,
    params,
    headers,
  } as AxiosRequestConfig;
  const res = await axios.request(options);
  return res.data;
};

export default makeRequest;
