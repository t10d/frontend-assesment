import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import cardsReducer from '../reducers';

export default function configureStore() {
  return createStore(
    cardsReducer,
    applyMiddleware(thunk)
  )
}
