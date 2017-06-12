// @flow

import express from 'express'

import controller from './categoriesController'

const router = express.Router()

router.route('/')
  .get(controller.getList)

export default router
