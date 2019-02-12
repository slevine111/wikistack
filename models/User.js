const connection = require('./connection')

const User = connection.define('user', {
  name: {
    type: connection.Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  email: {
    type: connection.Sequelize.TEXT,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  }
})

module.exports = User
