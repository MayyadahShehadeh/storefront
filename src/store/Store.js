import { createStore, combineReducers } from "redux";
import categoryReducer from './categories';
import productsReducer from './Product';
import {composeWithDevTools} from 'redux-devtools-extension';
import cartReducer from './Cart';

let reducers = combineReducers({
   categories: categoryReducer,
   products: productsReducer,
    cart: cartReducer });

const store = () => {
  return createStore(reducers,composeWithDevTools());
}

export default store();