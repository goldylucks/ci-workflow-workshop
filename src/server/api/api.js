// @flow

import express from 'express'

import categoriesRoutes from './categories/categoriesRoutes'

const router = express.Router()

router.use('/categories', categoriesRoutes)

export default router
