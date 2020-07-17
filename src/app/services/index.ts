import axios from "axios";

/**
 * The api definition/Instance to be used across all application
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
