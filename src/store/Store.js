import { createStore, combineReducers } from "redux";
import categoryReducer from './categories';
import productsReducer from './Product';
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({ categories: categoryReducer, products: productsReducer });

const store = () => {
  return createStore(reducers,composeWithDevTools());
}
export default store();