//connect all the reducers and middleware

import { legacy_createStore, combineReducers, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//brining in the reducer
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    //this shows the peice of state
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
    }
}
const middleware = [thunk]

const store = legacy_createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;