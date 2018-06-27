const Category = require('../model/category');
const Topic = require('../model/topic');
const moment = require('moment');

exports.showCreate = (req, res) => {
  Category.getAll((err, categories) => {
    if (err) {
      res.send('服务器内部错误');
      return;
    }
    res.render('topic/create.html', {
      categories,
      user: req.session.user,
    });
  });
};

exports.handleCreate = (req, res) => {
  const topic = req.body;
  topic.userId = req.session.user.id;
  topic.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  Topic.create(topic, (err) => {
    // if (err) {
    //   res.json({
    //     code: 500,
    //     msg: err.message
    //   });
    //   return;
    // }
    res.json({
      code: 200,
      msg: '话题添加成功'
    });
  });
};

exports.show = (req, res, next) => {
  // console.log(req.query);
  // console.log(req.params);
  // const { id } = req.query;
  const { id } = req.params;
  Topic.getById(id, (err, topic) => {
    if (err) {
      return next(err);
    }
    res.render('topic/show.html', {
      topic: topic,
      user: req.session.user,
    });
  });
};

exports.showEdit = (req, res) => {

};

exports.hanldeEdit = (req, res) => {

};

exports.hanldeDelete = (req, res) => {

};
