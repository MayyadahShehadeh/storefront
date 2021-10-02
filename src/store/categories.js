const initialState = {
    categories: [
        { name: 'food', description: 'Food Section'},
        { name: 'electronics', description: 'Electronic Section'}
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
                    activeCateg = item;
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
export const changeActiveCateg = (category)=> {
    return {
        type: 'CHANGEACTIVE',
        payload: category
    }
}

