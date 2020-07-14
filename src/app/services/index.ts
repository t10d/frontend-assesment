import axios from "axios";

/**
 * The api definition/Instance to be used across all application
 */
const api = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck",
});

export default api;
