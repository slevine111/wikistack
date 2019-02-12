const Sequelize = require('Sequelize')

const connection = new Sequelize('postgres://localhost/wikistack', {
  logging: false,
  define: {
    freezeTableName: true
  }
})

module.exports = connection
