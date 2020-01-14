import React, { Component } from 'react';
import axios from 'axios';

import { List, Typography } from '@material-ui/core';
import { Product, AddProduct } from '..';
import './ProductList.css'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.divClasses = props.className + " Product-container";

    this.state = {
      user: 2,
      products: []
    }
  }

  async componentDidMount() {
    axios.get(process.env.REACT_APP_API_BASEURL + '/users/' + this.state.user + '/products').then((result) => {
      this.setState({ products: result.data.result })
    })
  }

  render() {
    return (
      <div className={this.divClasses}>
        <Typography variant="h4">Products</Typography>
        <List>
          {this.state.products.map((product) => <Product key={product.id} product={product} />)}
        </List>
        <div className="Product-add">
          <AddProduct user={this.state.user} />
        </div>
      </div>
    )
  }
}

export default ProductList;