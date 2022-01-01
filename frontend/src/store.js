import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { userReduce } from "./reducers/userReducer";
const reducer=combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    user:userReduce


})
let initailState={};
const middleware=[thunk]
const store=createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware))
)
export default store