import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

export function Header(props) {
  return (
    <Box sx={{ flexGrow: 10 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 10 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Storefront
          </Typography>
      <Button style={{marginLeft:'800px', color:'white'}}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                        CART{props.cart.length}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const mapStateToProps = state =>({
  cart: state.cart
})
export default connect(mapStateToProps)(Header);

