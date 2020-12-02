import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { If } from 'react-if';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


import { addCart } from '../store/action';




function Products(props) {
  return (
    <Grid item sm={5}>
      {props.products.map((product) => {
        return (
          <If key={product.name} condition={props.active !== ''}>
            <div >
              <Typography variant="h4">
                {product.name}
              </Typography>
              <img alt={product.name} src={product.image} width="50" height="50"></img>
              <Typography>Price : {product.price} JD</Typography>
              <ButtonBase onClick={() => props.addCart(product)}>Add</ButtonBase>
            </div>
          </If>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    active: state.categories.active,
    products: state.products.products
  };
};

const mapDispatchToProps = { addCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
