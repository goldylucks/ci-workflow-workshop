// @flow

import { APP_SELECTOR } from '../shared/config'

import app from './app'

const render = (appHtml: string) => {
  // flow-disable-next-line
  document.querySelector(APP_SELECTOR).innerHTML = appHtml
}

render(app())

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default // eslint-disable-line global-require
    render(nextApp())
  })
}
