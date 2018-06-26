const Category = require('../model/category');
const Topic = require('../model/topic');

exports.showCreate = (req, res) => {
  Category.getAll((err, categories) => {
    if (err) {
      res.send('服务器内部错误');
      return;
    }
    res.render('topic/create.html', {
      categories
    });
  });
};

exports.handleCreate = (req, res) => {

};

exports.show = (req, res) => {

};

exports.showEdit = (req, res) => {

};

exports.hanldeEdit = (req, res) => {

};

exports.hanldeDelete = (req, res) => {

};
