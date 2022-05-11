import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import thunk from "redux-thunk";
//thunk和createStore的参数都是固定的，需要引入applyMiddleware使用中间件
const allReducers = combineReducers({
    count:countReducer,
    persons:personReducer
})
const store = createStore(allReducers, applyMiddleware(thunk));
export default store;
