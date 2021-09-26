const initialState = {
    products: [
        { name: 'Galaxy Chromebook 2', category: 'Electronics', price: 600, image: 'https://image-us.samsung.com/SamsungUS/home/computing/chromebooks/xe530qca-kb1us/gallery/02-02-2021/Position1.jpg?$product-details-jpg$' },
        { name: 'Galaxy Z Flip3 5G', category: 'Electronics', price: 400, image: 'https://image-us.samsung.com/us/smartphones/galaxy-z-flip3-5g/v1/images/galaxy-z-flip3-5g_highlights_kv_l.jpg' },
        { name: 'apple', category: 'Food', price: 3, image: 'https://specialtyproduce.com/sppics/2011.png' },
        { name: 'avocado',  category: 'Food', price: 4, image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/avocado-halves.jpg?quality=82&strip=all' },
        { name: 'strawberry', category: 'Food', price: 6, image: 'https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg' },
    ],
    activeProducts: [
    { name: 'Galaxy Chromebook 2', category: 'Electronics', price: 600, image: 'https://image-us.samsung.com/SamsungUS/home/computing/chromebooks/xe530qca-kb1us/gallery/02-02-2021/Position1.jpg?$product-details-jpg$' },
    { name: 'Galaxy Z Flip3 5G', category: 'Electronics', price: 400, image: 'https://image-us.samsung.com/us/smartphones/galaxy-z-flip3-5g/v1/images/galaxy-z-flip3-5g_highlights_kv_l.jpg' }
  ]
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'CHANGEACTIVE':
        let activedProd = state.products.filter(item => {
          return item.category === payload
        })
        return {
          products: state.products,
          activeProducts: activedProd
        }
      default:
        return state;
    }
  
  }
  
  
  export const getItems = (name)=> {
    return {
      type: 'CHANGEACTIVE',
      payload: name
    }
  }