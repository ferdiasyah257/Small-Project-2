import { createStore, combineReducers } from 'redux';
import  counterReducer from "./reducer/addChart";
import productReducer from "./reducer/productreducer";

const root = combineReducers({
    counter: counterReducer,
    productReducer : productReducer
});

const store = createStore(root);

export default store;