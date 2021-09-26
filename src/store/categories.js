const initialState = {
    categories: [
        { name: 'Food', description: 'Food Section'},
        { name: 'Electronics', description: 'Electronic Section'}
    ],
    categoryType: {},
}

export default function reducer (state = initialState, action) {
    let { type, payload } = action;
    console.log(action);

    switch (type) {
        case 'CHANGEACTIVE':
            let activeCateg = {};

            state.categories.forEach( item => {
                if (item.name === payload) {
                   return activeCateg = item;
                }
            });
            return {
                categories: state.categories,
                categoryType: activeCateg
            };
        default:
            return state;
    }
}


export const changeActive = (name)=> {
    return {
        type: 'CHANGEACTIVE',
        payload: name
    }
}