const mysql = require('mysql');
const moment = require('moment');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'ithub'
});

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
  // 数据验证
  // 验证是否为空
  connection.query(
    'select * from `users` where `email`=?',
    req.body.email,
    (err, results) => {
      if (err) {
        res.json({
          code: 500,
          msg: err.message
        });
        return;
      }
      if (results.length > 0) {
        res.json({
          code: 401,
          msg: '邮箱地址已被占用'
        });
        return;
      }
      // 邮箱没有被占用
      connection.query(
        'select * from `users` where `nickname`=?',
        req.body.nickname,
        (err, results) => {
          if (err) {
            res.json({
              code: 500,
              msg: err.message
            });
            return;
          }
          if (results.length > 0) {
            res.json({
              code: 401,
              msg: '昵称已被占用'
            });
            return;
          }
          // 验证通过此处去注册
          // 注册
          const sql = 'insert into users set ?';
          req.body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
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
        }
      )
    }
  )
};

exports.handleSignout = (req, res) => {
};
