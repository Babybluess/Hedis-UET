import { createStore, applyMiddleware } from "redux";
import myReducer from "./reducers";
import thunk from 'redux-thunk'

const middleware = [ thunk ]
const myStore = createStore(
    myReducer,
    applyMiddleware(...middleware)
)

export default myStore