import { createStore } from "redux";
import myReducer from "./reducers";

const myStore = createStore(myReducer)

export default myStore