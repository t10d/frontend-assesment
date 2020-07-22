import deckDataReducer from "./deckDataReducer";

export default ({ deckData }, action) => ({
  deckData: deckDataReducer(deckData, action),
});
