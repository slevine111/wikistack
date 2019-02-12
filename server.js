const app = require('./app')
const dbInit = require('./models/db')

const PORT = process.env.PORT || 3000

dbInit()
  .then(() => {
    app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
  })
  .catch(err => {
    console.log(err)
  })
