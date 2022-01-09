exports.sqlConfig = {
  host: process.env.MYSQL_DATABASE || 'localHost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'secret',
  database: process.env.MYSQL_ROOT_PASSWORD || 'mydb',
};

exports.port = process.env.PORT || 8080;
