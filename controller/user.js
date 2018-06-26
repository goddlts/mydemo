const moment = require('moment');
const User = require('../model/user');

exports.showSignin = (req, res) => {
  res.render('signin.html');
};

exports.handleSignin = (req, res) => {
  const sql = 'insert into users set ?';
  connection.query(sql, req.body, (err, results) => {
    if (err) {
      res.json({
        code: 500,
        msg: '服务器内部错误'
      });
      return;
    }
    res.json({
      code: 200,
      msg: '注册成功'
    });
  });
};

exports.showSignup = (req, res) => {
  res.render('signup.html');
};

exports.handleSignup = (req, res) => {
  User.getByEMail(req.body.email, (err, user) => {
    if (err) {
      res.json({
        code: 500,
        msg: err.message
      });
      return;
    }
    if (user) {
      res.json({
        code: 401,
        msg: '邮箱地址已被占用'
      });
      return;
    }

    User.getByNickname(req.body.nickname, (err, user) => {
      if (err) {
        res.json({
          code: 500,
          msg: err.message
        });
        return;
      }
      if (user) {
        res.json({
          code: 401,
          msg: '昵称已被占用'
        });
        return;
      }

      req.body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
      User.signup(req.body, (err) => {
        if (err) {
          res.json({
            code: 500,
            msg: err.message
          });
          return;
        }
        res.json({
          code: 200,
          msg: '注册成功'
        });
      });
    });
  });
};

exports.handleSignout = (req, res) => {
};
