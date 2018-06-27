const db = require('./db-helper');
exports.showIndex = (callback) => {
  db.query(
    'select * from `topics` order by `createdAt` desc',
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(results);
    }
  );
};