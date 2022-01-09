exports.sqlConfig = {
  host: process.env.MYSQL_HOST || 'localHost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'secret',
  multipleStatements: true,
};

exports.database = process.env.MYSQL_DATABASE || 'mydb';
exports.port = process.env.PORT || 8080;
