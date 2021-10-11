import axios from 'axios'

export const axiosInstance = axios.create({
  timeout: 30000,
  baseURL: process.env.REACT_APP_BASE_URL
});
