const express = require('express')
const router = express()

const home_controller = require('../controllers/HomeController.js')
const about_controller = require('../controllers/AboutController')
const users_controller = require('../controllers/UsersController')


router.get('/', home_controller.index)

router.get('/about', about_controller.index)

router.get('/users', users_controller.index)
module.exports = router