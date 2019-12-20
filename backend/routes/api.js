const express = require('express')
const router = express.Router()

// Controllers
const usersController = require('../controllers/UsersController.js')
const productsController = require('../controllers/ProductsController.js')
const groupsController = require('../controllers/GroupsController.js')

// GET
router.get('/users', usersController.findAll)
router.get('/users/:id', usersController.findOne)
router.get('/users/:id/products', usersController.findProducts)

router.get('/products', productsController.findAll)

router.get('/groups', groupsController.findAll)
router.get('/groups/:id', groupsController.findOne)
router.get('/groups/:id/users', groupsController.findUsers)

// POST

// PUT

// DELETE


module.exports = router