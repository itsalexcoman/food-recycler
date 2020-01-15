import React, { Component } from "react";
import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from "@material-ui/core";
import FoodIcon from "@material-ui/icons/Fastfood";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProduct } from "../../actions/user.actions";

class Product extends Component {
  handleDelete = id => {
    this.props.deleteProduct(id);
  };

  render() {
    let product = this.props.product;

    return (
      <Paper>
        <ListItem style={{ marginBottom: 10 }}>
          <ListItemAvatar>
            <FoodIcon color="primary" />
          </ListItemAvatar>
          <ListItemText className="multiline">
            <strong>{product.name}</strong> <br />
            Days until expired: {product.days_left}
          </ListItemText>
          <IconButton
            color="primary"
            onClick={this.handleDelete.bind(this, product.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Paper>
    );
  }
}

Product.propTypes = {
  user: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  deleteProduct
};

export default connect(mapStateToProps, mapActionsToProps)(Product);
