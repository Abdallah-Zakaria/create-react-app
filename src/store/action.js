import superagent from 'superagent'


export const activeCategory = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  }
}


export const addCart = (product) => {
  return {
    type: 'ADD',
    payload: product
  }
}

const API = 'https://api-js401.herokuapp.com/api/v1';


export const getRemoteData = () => {
  return (dispatch) => {
    return superagent.get(`${API}/products`).then((response) => {
      dispatch(getProducts({ products: response.body.results }));
    });
  };
};

const getProducts = (payload) => {
  return {
    type: 'GET_P',
    payload: payload,
  };
};


export const getRemoteData2 = () => {
  return (dispatch) => {
    return superagent.get(`${API}/categories`).then((response) => {
      dispatch(getCategory({ categories : response.body.results }));
    });
  };
};


const getCategory = (payload) => {
  return {
    type: 'GET_C',
    payload: payload,
  };
};


export const updateRemoteData = (product) => {
  return (dispatch) => {
    return superagent.put(`${API}/products/${product._id}`).send({ inStock: product.inStock - 1 }).then(() => {
      dispatch(addCart(product));
    });
  };
};