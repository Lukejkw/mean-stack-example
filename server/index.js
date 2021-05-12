
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dogs', (req, res) => {
  res.json([
      {
          name: 'Zamalek',
          age: 4
      },
      {
          name: 'Ginny',
          age: 5
      }
  ])
})

app.listen(port, () => {
  console.log(`James' app listening at http://localhost:${port}`)
})
