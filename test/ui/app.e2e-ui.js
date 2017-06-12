const url = 'http://localhost:8000'

module.exports = {
  tags: ['Home Page'],

  before(client) {
    client
      .url(url)
      .waitForElementVisible('body', 5000)
  },

  after(client) {
    client.end()
  },
}
