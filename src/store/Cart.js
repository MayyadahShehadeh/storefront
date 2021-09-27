
let initialState = [];

export default function reducer (state = initialState , action){
  let { type, payload } = action;
  console.log('cart action:', action);

  switch (type) {

    case 'addToCart':
      if (payload.inventoryCount !== 0) {
        return [ ...state, payload];
      }
      return state;

    default: return state;

  }

}

export const addToCart = (product)=> {
    return {
      type: 'addToCart',
      payload: product
    }
  };