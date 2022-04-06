const http = require('http')
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req);
  // set header content type
  res.setHeader('Content-Type', 'text/html')
  // routing
  // gunakan switch case untuk routing basic
  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      break
    case '/home':
      path += 'home.html'
      res.statusCode = 200
      break
    case '/services':
      path += 'services.html'
      res.statusCode = 200
      break
    default:
      path += '404.html'
      res.statusCode = 404
      break
  }

  // reading path
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      // res.write(data)
      // res.statusCode = 200
      res.end(data)
    }
  })

  // res.write('<head> <link rel="stylesheet" href="#"  </head>')
  // res.write('<h1>halo guys</h1>')
  // res.end()
})
server.listen(3000, 'localhost', () => {
  console.log('server running 300');
})