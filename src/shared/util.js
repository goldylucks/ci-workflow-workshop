// @flow

export const isProd = process.env.NODE_ENV === 'production'

export const dummyAddFunctionToTest = (n1: number, n2: number) => n1 + n2
