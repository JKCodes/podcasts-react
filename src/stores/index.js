import { createStore, applyMiddleware, combineReducers} from 'redux'
import { podcastReducer } from '../reducers'
import thunk from 'redux-thunk'

var store;

export default {
  initialize: () => {
    const reducers = combineReducers({
      podcast: podcastReducer
    })

    store = createStore({
      reducers,
      applyMiddleware(thunk)
    })

    return store
  },

  currentStore: () => {
    return store
  }
}