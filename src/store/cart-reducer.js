const initialState = {
  cart: [

  ]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ADD':
      let cartAdd = [...state.cart];
      if (!cartAdd.includes(payload.name)) {
        cartAdd.push(payload.name);
      }
      return {cart : cartAdd};
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}
