import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
function Header(props) {
  const style = useStyles();
  return (
    <AppBar color='inherit' position="static">
      <Toolbar>
        <Typography variant="h6"   className={style.title}>
          Store
    </Typography>
      </Toolbar>
    </AppBar>
  )
}




export default Header;