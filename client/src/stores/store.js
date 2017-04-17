import { createStore } from 'redux'
import rootReducer from './reducers/index'

export function configureStore(){
  return createStore(rootReducer)
}

export const store = configureStore()
