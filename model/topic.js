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