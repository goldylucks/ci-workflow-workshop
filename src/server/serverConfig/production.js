// @flow

// used also for staging
const productionConfig = {
  shouldSeed: process.env.SHOULD_SEED || false, // enable for staging app
  shouldLog: process.env.SHOULD_LOG || false, // enable for staging app
  dbUrl: process.env.MONGODB_URI, // set by heroku's mongo addon
}

export default productionConfig
