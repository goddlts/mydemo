const db = require('./db-helper');

exports.create = (topic, callback) => {
  db.query(
    'insert into `topics` set ?',
    topic,
    (err, results) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, results);
    }
  );
};

exports.findAll = (callback) => {
  db.query(
    'select * from `topics` order by `createdAt` desc',
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};