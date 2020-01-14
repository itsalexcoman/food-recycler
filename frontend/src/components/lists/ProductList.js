import React, { Component } from 'react';
import axios from 'axios';

import List from '@material-ui/core/List';
import Product from '../items/Product';
import AddProduct from '../forms/AddProduct';
import './ProductList.css'

const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

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
    axios.get(API_BASE_URL + '/users/' + this.state.user + '/products').then((result) => {
      this.setState({ products: result.data.result })
    })
  }

  render() {
    return (
      <div className={this.divClasses}>
        <h2>Products</h2>
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