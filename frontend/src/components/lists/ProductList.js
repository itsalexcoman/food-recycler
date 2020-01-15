import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserProducts } from "../../actions/user.actions";
import { List, Typography } from "@material-ui/core";
import { Product, AddProduct } from "..";

class ProductList extends Component {
  componentDidMount() {
    this.props.getUserProducts(this.props.user.currentUser.id);
  }

  render() {
    return (
      <div>
        <Typography variant="h4">Products</Typography>
        <List>
          {this.props.user.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </List>
        <AddProduct user={this.props.user.currentUser.id} />
      </div>
    );
  }
}

ProductList.propTypes = {
  user: PropTypes.object.isRequired,
  getUserProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  getUserProducts
};

export default connect(mapStateToProps, mapActionsToProps)(ProductList);
