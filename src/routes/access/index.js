'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const router = express.Router()

// signup
router.post('/signup', accessController.signUp)

module.exports = router
