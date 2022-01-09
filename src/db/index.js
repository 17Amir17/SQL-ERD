const mysql = require('mysql2');
const fs = require('fs');
const { sqlConfig } = require('../config/index');
const dipatchQuery = require('./dipatchQuery');
const dispatchQuery = require('./dipatchQuery');

const client = mysql.createConnection(sqlConfig);

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

function waitForQueries() {
  return new Promise((res) => {
    setTimeout(() => {
      if (queries && client) res();
    }, 10);
  });
}

function connect() {
  return new Promise((res, rej) => {
    client.connect(async (err) => {
      if (err) {
        return rej(err);
      }
      try {
        await waitForQueries();
        console.log('Creating Schema if not existing');
        await dipatchQuery(client, queries.createSchool);
        console.log('Schema created');
        await dispatchQuery(client, 'USE mydb;');
      } catch (error) {
        return rej(error);
      }
      try {
        console.log('Attempting to seed...');
        await dipatchQuery(client, queries.insertSchool);
        console.log('Seeded DB');
      } catch (error) {
        console.log('DB was not seeded as it is already full');
      }
      res();
    });
  });
}

module.exports = { connect, client, queries };
