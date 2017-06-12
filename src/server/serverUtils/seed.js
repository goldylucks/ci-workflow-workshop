import deasync from 'deasync'

import serverConfig from '../serverConfig'
import Categories from '../api/categories/categoriesModel'

import serverLogger from './serverLogger'
import { categories } from './seedData'

const Models = [Categories]

// init
serverLogger.log(`Seeding ${serverConfig.env} DB ...`)

const cleanDB = () => {
  serverLogger.log('Cleaning the DB ...')
  const promises = Models.map(model => model.remove().exec())
  return Promise.all(promises)
}

const seedCategories = () => {
  serverLogger.log('Seeding categories ...')
  const promises = categories.map(c => Categories.create(c))
  return Promise.all(promises)
}

const logSeedSuccess = () => {
  serverLogger.log('Seeded DB!')
}

const logSeedError = err => serverLogger.error('error seeding DB:', err)

const seed = () => {
  let ready // eslint-disable-line no-unmodified-loop-condition
  cleanDB()
    .then(seedCategories)
    .then(logSeedSuccess)
    .catch(logSeedError)
    .then(() => { ready = true })

  // make seed sync so test won't run before it is completed
  while (ready === undefined) { // eslint-disable-line no-unmodified-loop-condition
    deasync.sleep(100)
  }
}

export default seed
