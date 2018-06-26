const db = require('./db-helper');

exports.getAll = (callback) => {
  db.query(
    'select * from `topic_categories`',
    (err, results) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, results);
    }
  )
};