import { dummyAddFunctionToTest } from './util'

describe('shared/utils/dummyAddFunctionToTest', () => {
  it('should return 5', () => {
    expect(dummyAddFunctionToTest(1, 4)).toEqual(5)
  })
})
