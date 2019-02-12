const connection = require('./connection')

const dbInit = () => {
  return connection.authenticate().then(() => {
    return connection.sync()
  })
}

module.exports = dbInit
