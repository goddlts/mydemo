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

exports.getById = (id, callback) => {
  db.query(
    'select * from `topics` where `id`=?',
    id,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length > 0) {
        callback(null, results[0]);
      } else {
        callback(null, null);
      }
    }
  );
}