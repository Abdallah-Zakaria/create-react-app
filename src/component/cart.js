import React from 'react';
import { connect } from 'react-redux';


function Cart(props) {

  return (
    <>
      {props.cart.map(product => {
        return (
          <h5>{product}</h5>
        )
      })}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Cart);