import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FoodIcon from '@material-ui/icons/Fastfood'

class Product extends Component {
    render() {
      let product = this.props.product;
      
      return (
        <ListItem>
            <ListItemAvatar>
              <FoodIcon color="primary" />
            </ListItemAvatar>
            <ListItemText className="multiline">
                <strong>{product.name}</strong> <br/>
                Days until expired: {product.days_left}
            </ListItemText>
            <Button
              color="primary"
              variant="contained"
            >Claim</Button>
      </ListItem>
      );  
    }
  }

  export default Product;