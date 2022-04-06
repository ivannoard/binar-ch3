// const person = require('./orang')

// console.log(person);

// const os = require('os')
// console.log(os.platform(), os.homedir());

// cara membaca file
// function name()
const fs = require('fs')
// const read = fs.readFileSync('./documents/file.txt', 'utf-8')
// fs.readFile('./documents/file.txt', (err, data) => {
// return !err ? data : err
//   if (err) {
//     console.log('error ni bro');
//   }
//   console.log(data.toString());
// })
// console.log(read);

// fs.writeFileSync('./documents/file.txt', 'asdasd')
// console.log(fs.readFileSync('./documents/file.txt', 'utf-8'));
// writeFile membuat file baru

// membuat folder
// fs.mkdir('./assets', (err) => {
//   if (err) {
//     console.log('tidak terbuat: ', err);
//   }
//   console.log('sudah terbuat');
// })

// cek folder jika sudah ada
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     console.log('tidak terbuat : ', err);
//   })
// } else {
//   console.log('sudah ada');
// }

// delete file
if (fs.existsSync('./documents/file.txt')) {
  fs.unlink('./documents/file.txt', (err) => {
    if (err) {
      console.log('file tidak terhapus: ', err);
    }
    console.log('file terhapus');
  })
} else {
  console.log('not found');
}