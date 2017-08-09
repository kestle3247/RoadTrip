var express = require('express')

var app = express()

app.use(express.static('./main.css'))
//home
app.get('/home', function(req, res) {
  res.sendFile('./home.html', {root: './places'})
})
//chicago
app.get('/chicago', function(req, res) {
  res.sendFile('./chicago.html', {root: './places'})
})
//boston
app.get('/boston', function(req, res) {
  res.sendFile('./boston.html', {root: './places'})
})
//nyc
app.get('/nyc', function(req, res) {
  res.sendFile('./nyc.html', {root: './places'})
})
//sanfrancisco
app.get('/sanfrancisco', function(req, res) {
  res.sendFile('./sanfrancisco.html', {root: './places'})
})
//css
app.get('/main.css', function(req, res) {
  res.sendFile('./main.css', {root: './styles'})
})


app.listen(8000)
