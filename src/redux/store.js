import { createStore , applyMiddleware ,compose } from 'redux' 
import thunk from 'redux-thunk'
import reducer from "./reducer"


const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    reducer,
    enhancer
    ) // 创建数据存储仓库

export default store


