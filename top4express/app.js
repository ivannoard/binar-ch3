const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const dbURI = 'mongodb+srv://risol:risol@learnnode.y5xog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('connected to DB'))
  .catch((err) => console.log(err))

app.set('view engine', 'ejs')
app.set('views', 'views');

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', {
  //   root: __dirname
  // })
  res.render('index', {
    title: 'home',
  })
})

// services
app.get('/services', (req, res) => {
  // res.sendFile('./views/services.html', {
  //   root: __dirname
  // })
  const services = [
    { title: 'halo' },
    { title: 'hai' }
  ]
  res.render('services', { title: 'services', services: services })
})

// about
app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', {
  //   root: __dirname
  // })
  res.render('about', {
    title: 'about',
  })
})
app.get('/about/profile', (req, res) => {
  res.render('profile')
})
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404
app.use((req, res) => {
  // res.sendFile('./views/404.html', {
  //   root: __dirname
  // })
  res.status(404).render('404')
})

app.listen(5556, () => {
  console.log('server running in port 3000');
})
app.use(morgan('dev'))