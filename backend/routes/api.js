const express = require('express')
const router = express.Router()

// Controllers
const usersController = require('../controllers/UsersController.js')
const productsController = require('../controllers/ProductsController.js')
const groupsController = require('../controllers/GroupsController.js')
const membershipController = require('../controllers/MembershipController.js')

// GET
router.get('/users', usersController.getAll)
router.get('/users/:id', usersController.getOne)
router.get('/users/:id/products', usersController.getProducts)

router.get('/products/:id', productsController.getOne)

router.get('/groups', groupsController.getAll)
router.get('/groups/:id', groupsController.getOne)
router.get('/groups/:id/users', groupsController.getUsers)
router.get('/groups/:id/products', groupsController.getProducts)

// POST

router.post('/users', usersController.add)
router.post('/products', productsController.add)
router.post('/groups', groupsController.add)
router.post('/groups/:id/users/:id', membershipController.add)

// PUT

router.put('/users/:id', usersController.update)
router.put('/products/:id', productsController.update)
router.put('/groups/:id', groupsController.update)

// DELETE

router.delete('/users/:id', usersController.delete)
router.delete('/products/:id', productsController.delete)
router.delete('/groups/:id', groupsController.delete)
router.delete('/groups/:id/users/:id', membershipController.delete)

module.exports = router