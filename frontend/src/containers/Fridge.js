import React from 'react';
import './Fridge.css'
import Profile from '../components/Profile'
import UserList from '../components/lists/UserList'
import ProductList from '../components/lists/ProductList'

class Fridge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type
    }
  }

  render() {
    if (this.state.type === "Product") {
      return (
        <div className="Fridge">
          <Profile className="Fridge-master" type={this.state.type} />
          <ProductList className="Fridge-detail" />
        </div>
      );
    } else if (this.state.type === "User") {
      return (
        <div className="Fridge">
          <Profile className="Fridge-master" type={this.state.type} />
          <UserList className="Fridge-detail" />
        </div>
      );
    } else {
      return (
        <div className="Fridge">
          <h1>You broke the Fridge! What'd you do?</h1>
        </div>
      )
    }
  }
}
export default Fridge;