var express = require('express')
var app = express()

app.use(express.static(__dirname + '/dist'))
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
