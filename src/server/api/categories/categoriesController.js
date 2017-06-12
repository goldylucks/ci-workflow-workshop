import Categories from './categoriesModel'

const getList = (req, res, next) => {
  Categories.find()
    .then(categories => res.json(categories))
    .catch(next)
}

const categoriesController = {
  getList,
}

export default categoriesController
