import React, { Component } from "react";
import { List, Typography } from "@material-ui/core";
import { Product, AddProduct } from "..";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserProducts } from "../../actions/user.actions";

class ProductList extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4">Products</Typography>
        <List>
          {this.props.ui.fridgeOptions.profile === "user" ? (
            <div>
              {this.props.user.products.map(product => (
                <Product key={product.id} product={product} />
              ))}
              <AddProduct user={this.props.user.currentUser.id} />
            </div>
          ) : (
            this.props.group.products.map(product => (
              <Product key={product.id} product={product} />
            ))
          )}
        </List>
      </div>
    );
  }
}

ProductList.propTypes = {
  user: PropTypes.object.isRequired,
  getUserProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ui: state.ui,
  user: state.user,
  group: state.group
});

const mapActionsToProps = {
  getUserProducts
};

export default connect(mapStateToProps, mapActionsToProps)(ProductList);
