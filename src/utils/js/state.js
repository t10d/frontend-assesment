import defaultState from '../json/defaultState.json'
import suits from './suits'
import values from './values'

const state = defaultState
state.defaults = { suits, values }
export default state
