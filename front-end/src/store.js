//connect all the reducers and middleware

import { legacy_createStore, combineReducers, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//brining in the reducer
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
    userDetailsReducer, 
    userLoginReducer, 
    userRegisterReducer, 
    userUpdateProfileReducer 
} from './reducers/userReducers'

const reducer = combineReducers({
    //this shows the peice of state
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userName'))
  : null

const initialState = {
    cart: {cartItems: cartItemsFromStorage },
    userLogin: {userInfo: userInfoFromStorage},
}
const middleware = [thunk]

const store = legacy_createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;