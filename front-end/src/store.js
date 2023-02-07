//connect all the reducers and middleware

import { legacy_createStore, combineReducers, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//brining in the reducer
import { productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
    //this shows the peice of state
    productList: productListReducer,
})
const initialState = {}
const middleware = [thunk]

const store = legacy_createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))


export default store;