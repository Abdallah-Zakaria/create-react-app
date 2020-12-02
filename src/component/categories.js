import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../store/action';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


import {getRemoteData2} from '../store/action';

function Categories(props) {
  useEffect(() => {
    props.getRemoteData2()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {props.categories.map(category => {
        return (
          <ButtonBase key={category.name} onClick={() => props.activeCategory(category.name)}>
            <Typography>{category.name}</Typography>
            {/* <img src={category.url} alt={''} width="50" height="50"></img> */}
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

const mapDispatchToProps = { activeCategory , getRemoteData2 };



export default connect(mapStateToProps, mapDispatchToProps)(Categories);
