import request from 'supertest' // eslint-disable-line import/no-extraneous-dependencies

import server from '../../'
import { FETCH_CATEGORIES_ENDPOINT } from '../../../shared/routes'
import { categories } from '../../serverUtils/seedData'

const app = request(server)

describe('server/api/categories/getList', () => {
  it('should get all categories', () => {
    app.get(FETCH_CATEGORIES_ENDPOINT)
      .then((resp) => {
        expect(resp.body).toEqual(expect.any(Array))
        expect(resp.body).toHaveLength(categories.length)
      })
  })
})
