import { getAllProductsReducer, updateProductReducer, addProductReducer, deleteProductReducer, getProductByIdReducer, addProductReviewReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerNewUserReducer, loginReducer, updateReducer, getAllUsersReducer, deleteUserReducer } from './reducers/userReducer'
import {
    getOrderByIdReducer, getAllOrdersReducer, getOrdersByUserIdReducer, placeOrderReducer,
    orderCreateReducer, orderDeliverReducer
} from "./reducers/orderReducer";
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const finalReducer = combineReducers({

    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    updateProductReducer: updateProductReducer,
    addProductReducer: addProductReducer,
    deleteProductReducer: deleteProductReducer,
    addProductReviewReducer: addProductReviewReducer,
    cartReducer: cartReducer,
    registerNewUserReducer: registerNewUserReducer,
    loginReducer: loginReducer,
    placeOrderReducer: placeOrderReducer,
    orderCreateReducer: orderCreateReducer,
    getOrdersByUserIdReducer: getOrdersByUserIdReducer,
    getOrderByIdReducer: getOrderByIdReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    updateReducer: updateReducer,
    getAllUsersReducer: getAllUsersReducer,
    deleteUserReducer: deleteUserReducer,
    orderDeliverReducer:orderDeliverReducer,


})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState = {
    cartReducer: {
        cartItems: cartItems,
    },
    loginReducer: { currentUser: currentUser },

}


const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(finalReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
))

export default store