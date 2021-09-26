import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { getItems } from '../store/Product';


function MediaCard(props) {
  return (
      <>
       {props.activeProducts.map(element => {
      return <Card sx={{ maxWidth: 200 }} style={{display: 'inline-block', marginLeft: '15%', width: '25%', marginTop: '3%' }}>
      <CardMedia
        component="img"
        height="140"
        image={element.image}
        />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          
         {element.name}
         / ${element.price}
        </Typography>
      </CardContent>
    </Card>
    })}
    </>
  );
}
const mapStateToProps=(state) => {
    return state.products;
}
const mapDispatchToProps = {getItems}

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)



