const express = require('express')
const router = express.Router()
const { create, list, remove } = require('../controllers/concategory')
const { authCheck, adminCheck } = require('../middlewares/authCheck')

// @ENDPOINT https://ecommerce2025-api.vercel.app/api/category
router.post('/category', authCheck, adminCheck, create)
router.get('/category', list)
router.delete('/category/:id', authCheck, adminCheck, remove)

module.exports = router
