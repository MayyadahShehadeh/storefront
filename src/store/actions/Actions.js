
import superagent from 'superagent';

let api ='https://gist.githubusercontent.com/amlcurran/6d174c472e2523be5f9cad7092e1d7ab/raw/edfb73c8ade674f40bfff8f3dfed97d327c1abc1/fruits.json';
// https://postmanmaster.herokuapp.com/fruit/

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


  export const changeActive = (category)=> {
    return {
        type: 'CHANGEACTIVE',
        payload: category
    }
}


export const getItems = (name)=> {
    return {
      type: 'CHANGEACTIVE',
      payload: name
    }
  }
  export const changeCartItems = (product) =>{
    return {
        type: 'ChangeCartItems',
        payload: product
    }
}