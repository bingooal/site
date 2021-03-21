/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

import axios, { AxiosRequestConfig } from 'axios';
import { GetFixtures } from '../indexBackEnd';

export const getFixturesFromBingoal: GetFixtures = async () => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${window.location.origin}/api/fixtures`,
  };
  const res = await axios.request(options);

  return res.data;
};
