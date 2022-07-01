import {legacy_createStore as createStore, combineReducers} from  "redux";
import { devToolsEnhancer } from '@redux-devtools/extension'

import productReducer from "../reducer/ProductReducer";
import cartReducer from "../reducer/CartReducer";

const root = combineReducers({productReducer,cartReducer})

const store = createStore(root, devToolsEnhancer());

export default store;