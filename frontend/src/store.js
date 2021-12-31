import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
const reducer=combineReducers({

})
let initailState={};
const middleware=[thunk]
const store=createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware))
)
export default store