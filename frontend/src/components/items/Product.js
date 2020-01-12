import React, { Component } from 'react';
import './Product.css'

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

class Product extends Component {
    render() {
      let product = this.props.product;
      
      return (
        <ListItem>
            <ListItemAvatar>
                {
                    <Avatar src="product_icon.png" style={{width: 70, height: 60}}/>
                }
            </ListItemAvatar>
            <ListItemText classes="multiline">
                <strong>{product.name}</strong> <br/>
                Days Left: {product.days_left}
            </ListItemText>
            <Button
              target="_blank"
              label="claim_button"
              secondary={true}
              color="primary"
              variant="contained"
            >Claim</Button>
      </ListItem>
      );  
    }
  }

  export default Product;