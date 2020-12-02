let initialState = {
  products: [

  ]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ACTIVE':
      const productsActive = initialState.products.filter((product) => {
        return product.category === payload;
      })
      console.log(productsActive);
      return { products: productsActive };
    case 'ADD':
      const productsAdd = state.products.map((product) => {
        if (product.name === payload.name) {
          product.inStock = product.inStock - 1;
        }
        return product;
      })
      return { products: productsAdd };
    case 'GET_P':
      initialState = payload;
      return payload
    default:
      return state
  }
}




