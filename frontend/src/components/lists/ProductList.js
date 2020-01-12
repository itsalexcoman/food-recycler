import React, { Component } from 'react';
import List from '@material-ui/core/List';

import axios from 'axios'

import Product from '../items/Product'

const API_BASE_URL = 'http://3.81.36.253:3001/api'

class ProductList extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        products: []
      }
    }

    async componentDidMount() {
      axios.get(API_BASE_URL + '/users/2/products').then((result) => {
        this.setState({products: result.data.result})
      })
    }

    render() {
      return (
        <div>
        <h3>Products</h3>
        <List>
          {this.state.products.map((product) => <Product key={product.id} product={product} />)}
        </List>
        </div>
      )
    }
  }

export default ProductList;