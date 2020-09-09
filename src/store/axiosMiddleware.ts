import axios from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";

const clients = {
  default: {
    client: axios.create({
      baseURL: "https://deckofcardsapi.com",
      responseType: "json",
    }),
  },
};

export default multiClientMiddleware(clients);
