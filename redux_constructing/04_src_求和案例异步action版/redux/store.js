import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'
//thunk和createStore的参数都是固定的，需要引入applyMiddleware使用中间件
const store = createStore(countReducer,applyMiddleware(thunk));
export default store