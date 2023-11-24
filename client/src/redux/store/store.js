import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux'
import thunk from 'redux-thunk'
import countriesReducer from '../reducer/countries'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancedCompose = composeAlt(applyMiddleware(thunk))

const store = createStore(countriesReducer, enhancedCompose)

export default store
