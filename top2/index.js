const path = require('path')

// path
console.log(__filename)

// namafile
console.log(path.basename(__filename))

// direktori / folder
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// membuat path berbasis object
console.log(path.parse(__filename));

// join path
console.log(path.join(__filename, "test", "test.html"));