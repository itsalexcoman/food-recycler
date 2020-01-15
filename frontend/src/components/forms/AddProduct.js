import React, { Component } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../actions/user.actions";

class AddProduct extends Component {
  state = {
    name: "",
    type: "",
    days_left: "",
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleAdd = () => {
    let newProduct = {
      name: this.state.name,
      type: this.state.type,
      user_id: this.props.user.currentUser.id,
      days_left: this.state.days_left
    };
    this.props.addProduct(newProduct);
    this.handleClose();
  };

  nameHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  selectHandle = e => {
    this.setState({
      type: e.target.value
    });
  };

  daysHandle = e => {
    this.setState({
      days_left: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button
          color="secondary"
          variant="outlined"
          aria-label="add"
          startIcon={<AddIcon />}
          onClick={this.handleClickOpen}
        >
          Add Product
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              onChange={this.nameHandler}
            />
            <FormControl fullWidth>
              <InputLabel id="select-label">Category</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={this.state.type}
                onChange={this.selectHandle}
              >
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Drink">Drink</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              id="days_left"
              label="Days until expired"
              type="number"
              fullWidth
              onChange={this.daysHandle}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AddProduct.propTypes = {
  user: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = { addProduct };

export default connect(mapStateToProps, mapActionsToProps)(AddProduct);
