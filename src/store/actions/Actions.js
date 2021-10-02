
import superagent from 'superagent';

let api ='https://api-server-0.herokuapp.com/products'

export const getData = () => async(dispatch,state) => {

        return await superagent.get(api).then(res =>{
            dispatch(getAction(res.body));
            console.log(res.body);

        })
    };
export const getAction = (payload) => {
    return {
        type: 'GET',
        payload: payload
    };
};



export const addToCart = (product)=> {
    return {
      type: 'addToCart',
      payload: product
    }
  };




export const getItems = (name)=> {
    return {
      type: 'CHANGE_ACTIVE',
      payload: name
    }
  }
  export const changeCartItems = (product) =>{
    return {
        type: 'ChangeCartItems',
        payload: product
    }
}