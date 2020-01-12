import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import axios from 'axios';

const API_BASE_URL = (process.env.REACT_APP_API_BASEURL) ? process.env.REACT_APP_API_BASEURL : 'http://localhost:3001/api';

export default function AddProduct() {
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setType(e.target.value);
    };

    const handleAdd = () => {
        axios.post(API_BASE_URL + '/products', {
            name: 'My Product',
            type: 'Food',
            user_id: 2,
            days_left: 3
        })
            .then(() => {
                setOpen(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Button color="secondary" variant="outlined" aria-label="add" startIcon={<AddIcon />} onClick={handleClickOpen}>
                Add Product
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={handleChange}>
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}