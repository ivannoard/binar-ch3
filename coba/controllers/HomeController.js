const Users = require('../models/users.json')

exports.index = function (req, res) {
  res.render('pages/index', { datas: Users })

}