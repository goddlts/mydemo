const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mydemo'
});

exports.showSignin = (req, res) => {
  res.render('signin.html');
};

exports.handleSignin = (req, res) => {

};

exports.showSignup = (req, res) => {
  res.render('signup.html');
};

exports.handleSignup = (req, res) => {
  // 注册
  const sql = 'insert into user set ?'
  connection.query(sql, req.body, (err, results) => {
    if (err) {
      res.send('插入数据失败');
      return;
    }
    res.send({
      success: true
    });
  });
};

exports.handleSignout = (req, res) => {

};
