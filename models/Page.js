const connection = require('./connection')

const Page = connection.define('page', {
  title: {
    type: connection.Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  slug: {
    type: connection.Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  content: {
    type: connection.Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: connection.Sequelize.ENUM('open', 'closed'),
    validate: { isIn: [['open', 'closed']] }
  }
})

module.exports = Page
