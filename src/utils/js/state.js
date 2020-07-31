import defaultState from '../json/defaultState.json'
import suits from './suits'
import values from './values'

const state = () => {
  defaultState.defaults = { suits: suits(), values: values() }
  return defaultState
}

export default state
