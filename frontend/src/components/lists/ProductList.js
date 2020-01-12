import React, { Component } from 'react';
import axios from 'axios';

import List from '@material-ui/core/List';
import Product from '../items/Product';
import AddProduct from '../forms/AddProduct';

const API_BASE_URL = (process.env.REACT_APP_API_BASEURL) ? process.env.REACT_APP_API_BASEURL : 'http://localhost:3001/api';

class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    axios.get(API_BASE_URL + '/users/2/products').then((result) => {
      this.setState({ products: result.data.result })
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <h3>Products</h3>
        <List>
          {this.state.products.map((product) => <Product key={product.id} product={product} />)}
        </List>
        <AddProduct />
      </div>
    )
  }
}

export default ProductList;