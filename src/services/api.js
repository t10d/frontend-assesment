import axios from 'axios'

const API = 'https://deckofcardsapi.com/api/deck'
const timeout = 5000
const config = {
  timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

const callAPI = (url, callback) => {
  axios
    .get(url, config)
    .then((response) => callback(response))
    .catch((err) => callback(err))
}

export const createDeck = async (cards, callback) => {
  const url = `${API}/new/shuffle/?cards=${cards}`
  const call = await callAPI(url, callback)
  return call
}

export const recreateDeck = (deckId, callback) => {
  const url = `${API}/${deckId}/shuffle/`
  return callAPI(url, callback)
}
export const getDeckFromAPI = (deckId, quantity, callback) => {
  const url = `${API}/${deckId}/draw/?count=${quantity}`
  return callAPI(url, callback)
}
