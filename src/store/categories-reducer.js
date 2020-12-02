const initialState = {
  categories: [
    { name: 'laptops', displyName: 'Laptop', description: 'laptops categories', url: 'http://clipart-library.com/data_images/89997.jpg' },
    { name: 'phones', displyName: 'Phones', description: 'phones categories', url: 'http://clipart-library.com/images/5iRXRkExT.png' },
    { name: 'televisions', displyName: 'Televisions', description: 'televisions categories', url: 'http://clipart-library.com/img/865440.png' },
  ],
  active: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case 'ACTIVE':
      const categories = state.categories;
      const active = payload;
      return { categories, active };
    default:
      return state;
  }
}

export const activeCategory = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  }
}