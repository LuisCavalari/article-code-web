import { createStore } from 'redux'
import combineReducers from './Reducers'

export  const store = createStore(combineReducers)