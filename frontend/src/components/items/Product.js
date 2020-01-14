import React, { Component } from 'react';
import axios from 'axios';

import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FoodIcon from '@material-ui/icons/Fastfood';
import DeleteIcon from '@material-ui/icons/Delete';

const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

class Product extends Component {
  handleDelete = () => {
    axios.delete(API_BASE_URL + '/products/' + this.props.product.id)
      .then(() => {

      })
      .catch((error) => {
        console.log(error);
      });

  }
  render() {
    let product = this.props.product;

    return (
      <ListItem>
        <ListItemAvatar>
          <FoodIcon color="primary" />
        </ListItemAvatar>
        <ListItemText className="multiline">
          <strong>{product.name}</strong> <br />
          Days until expired: {product.days_left}
        </ListItemText>

        <IconButton color="primary" onClick={this.handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  }
}

export default Product;