const Topic = require('../model/topic');
const moment = require('moment');
exports.showIndex = (req, res, next) => {
  Topic.findAll((err, topics) => {
    if (err) {
      return next(err);
    }
    res.render('index.html', {
      // user: req.session.user,
      topics,
      moment
    });
  });
  
};