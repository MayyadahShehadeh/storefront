import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { getItems,changeCartItems,addToCart } from '../store/actions/Actions';
import Button from '@material-ui/core/Button';
import {CardActions} from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function MediaCard(props) {

  const handleAdding=(product)=> {
    props.addToCart(product);
    props.changeCartItems(product);
    props.getItems(props.category.name);
}
  return (
      <>
       {props.products.activeProducts.map((element , idx) => {
      return <Card key={idx} sx={{ maxWidth: 200 }} style={{display: 'inline-block', marginLeft: '15%', width: '25%', marginTop: '3%' }}>
      <CardMedia
        component="img"
        height="140"
        image={element.image}
                title={element.name}

        />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
         {element.name}
         / ${element.price}
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small" color="primary"
            onClick={()=>{ handleAdding(element) }}>
            <AddShoppingCartIcon></AddShoppingCartIcon>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    })}
    </>
  );
}
const mapStateToProps=(state) => ({
    products: state.products,
    category: state.categories.categoryType,
    cartProducts: state.cart

})
const mapDispatchToProps = {
  getItems,
  addToCart,
  changeCartItems
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)



