const db = require('./db-helper');

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
  db.query(
    'ins into `users` set ?',
    user,
    (err, results) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    }
  );
};

