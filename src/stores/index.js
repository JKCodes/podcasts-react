import { createStore, applyMiddleware, combineReducers} from 'redux'
import { podcastReducer } from '../reducers'
import thunk from 'redux-thunk'

var store;

export default {
  initialize: () => {
    const reducers = combineReducers({
      podcast: podcastReducer
    })

    store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }
}