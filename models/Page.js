const connection = require('./connection')

const Page = connection.define(
  'page',
  {
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
  },
  {
    hooks: {
      beforeValidate: page => {
        if (page.title === undefined || page.title === '') {
          const titleLength = Math.round(Math.random() * 9) + 1
          let string = ''
          for (let i = 1; i <= titleLength; i++) {
            string =
              string + String.fromCharCode(65 + Math.round(Math.random() * 57))
          }
          page.slug = string
        } else {
          page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '')
        }
      }
    }
  }
)

module.exports = Page
