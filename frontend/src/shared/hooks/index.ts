/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const useApi = () => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/',
  });
  return api;
};
