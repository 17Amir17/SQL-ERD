const mysql = require('mysql2');
const fs = require('fs');
const { sqlConfig } = require('../config/index');

const client = mysql.createConnection(sqlConfig);

function connect() {
  return new Promise((res, rej) => {
    client.connect((err) => {
      if (err) {
        rej(err);
      }
      res();
    });
  });
}

const queries = (() => {
  const data = {};
  fs.readdir(`${__dirname}//queries`, (err, files) => {
    files.forEach((file) => {
      data[file.split('.')[0]] = fs.readFileSync(
        `${__dirname}//queries//${file}`,
        {
          encoding: 'utf8',
          flag: 'r',
        }
      );
    });
  });
  return data;
})();

module.exports = { connect, client, queries };
