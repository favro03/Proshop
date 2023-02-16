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
    userUpdateProfileReducer ,
    userListReducer,
} from './reducers/userReducers'
import { 
    orderCreateReducer, 
    orderDetailsReducer ,
    orderPayReducer,
    orderListMyReducer,
 } from './reducers/orderReducers'


const reducer = combineReducers({
    //this shows the peice of state
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userName'))
  : null

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage,
     },
    userLogin: {
        userInfo: userInfoFromStorage
    },
}
const middleware = [thunk]

const store = legacy_createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;