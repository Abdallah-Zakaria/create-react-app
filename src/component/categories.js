import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../store/categories-reducer';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';




function Categories(props) {

  return (
    <>
      {props.categories.map(category => {
        return (
          <ButtonBase key={category.name} onClick={() => props.activeCategory(category.name)}>
            <Typography>{category.displyName}</Typography>
            <img src={category.url} alt={category.displyName} width="50" height="50"></img>
          </ButtonBase>
        )
      })}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    active: state.categories.active
  };
};

const mapDispatchToProps = { activeCategory };



export default connect(mapStateToProps, mapDispatchToProps)(Categories);
