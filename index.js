const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('called.')

  let simen = "simen"

  console.log(simen);

  res.json({
    hei: 'halla',
    hei2: 'halla2',
  })  
})

const port = 8080

const server = app.listen(port, () => {
  console.log(`running express app on port: ${port}`)
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed!')
  })
})
