// @flow

import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = () => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Hot Module Replacement</title>
    </head>
    <body>
      <h1>This is a title!</h1>
      <div class=${APP_CONTAINER_CLASS}></div>
    </body>
    <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
  </html>
`
export default renderApp
