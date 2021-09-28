import { createStore, combineReducers,applyMiddleware } from "redux";
import categoryReducer from './categories';
import productsReducer from './Product';
import {composeWithDevTools} from 'redux-devtools-extension';
import cartReducer from './Cart';
import thunk from 'redux-thunk';

let reducers = combineReducers({
   categories: categoryReducer,
   products: productsReducer,
    cart: cartReducer });

const store = () => {
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store();