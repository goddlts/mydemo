const db = require('./db-helper');
const md5 = require('blueimp-md5');

exports.getByEMail = (email, callback) => {
  db.query(
    'select * from `users` where `email`=?',
    email,
    (err, results) => {
      if (err) {
        callback(err);
        return;
      }
      if (results.length > 0) {
        callback(null, results[0]);
      } else {
        callback(null, null);
      }
    }
  );
};

exports.getByNickname = (nickname, callback) => {
  db.query(
    'select * from `users` where `nickname`=?',
    nickname,
    (err, results) => {
      if (err) {
        callback(err);
        return;
      }
      if (results.length > 0) {
        callback(null, results[0]);
      } else {
        callback(null, null);
      }
    }
  )
};

exports.signup = (user, callback) => {
  user.password = md5(user.password);
  db.query(
    'insert into `users` set ?',
    user,
    (err, results) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    }
  );
}