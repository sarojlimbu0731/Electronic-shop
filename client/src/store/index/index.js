import {legacy_createStore as createStore, combineReducers} from  "redux";

import productReducer from "../reducer/ProductReducer";

const root = combineReducers({productReducer})

const store = createStore(root);

export default store;