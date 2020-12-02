import React from 'react';
import { connect } from 'react-redux';


function Cart(props) {

  return (
    <div>
      {props.cart.map(product => {
        return (
          <h5 key={product}>{product}</h5>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Cart);