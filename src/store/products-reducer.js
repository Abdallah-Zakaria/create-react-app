const initialState = {
  products: [
    { name: 'Dell Inspiron ', category: 'laptops', price: 589, count: 16, image: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/13_9380/global_spi/notebook-xps-13-9380-whl-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400' },
    { name: 'Macbook Air', category: 'laptops', price: 1099, count: 9, image: 'https://static.bhphoto.com/images/images500x500/apple_mwtl2ll_a_13_3_macbook_air_with_1584552907_1553858.jpg' },
    { name: 'Iphone 12 Pro Max', category: 'phones', price: 999, count: 32, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-61584/iphone-12-pro-max-graphite-hero.jpg' },
    { name: 'Samsung Galaxy Note 20 Ultra', category: 'phones', price: 599, count: 45, image: 'https://bci-store.com/pub/media/catalog/product/cache/42bb060db5a9878e5f49b073c78ea86c/2/0/20_black_1__2.jpg' },
    { name: 'Samsung Smart 4K Ultra', category: 'televisions', price: 1500, count: 11, image: 'https://brain-images-ssl.cdn.dixons.com/3/7/10206773/u_10206773.jpg' },
    { name: 'Samsung Smart TV', category: 'televisions', price: 700, count: 16, image: 'https://iicybersecurity.com/wp-content/uploads/2020/04/Samsung-LG-Smart-TV-hack.jpg' },
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
      return { products: productsActive };
    case 'ADD':
      const productsAdd = state.products.map((product) => {
        if (product.name === payload.name) {
          product.count = product.count - 1;
        }
        return product;
      })
      return { products: productsAdd };
    default:
      return state
  }
}




