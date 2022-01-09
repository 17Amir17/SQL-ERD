const { client, queries } = require('./index');

function getWithID(query, id) {
  return new Promise((res, rej) => {
    const sql = query.replace('#ID', id);
    client.query(sql, function (err, result, fields) {
      if (err) rej(err);
      else res(result, fields);
    });
  });
}

async function getTeacherByID(id) {
  return await getWithID(queries.getTeacherByID, id);
}

async function getClassByID(id) {
  return await getWithID(queries.getClassByID, id);
}

async function getPupilsByID(id) {
  return await getWithID(queries.getPupilsByID, id);
}

async function getAllSubjects() {
  return new Promise((res, rej) => {
    const sql = queries.getAllSubjects;
    client.query(sql, (err, result, fields) => {
      if (err) rej(err);
      else res(result, fields);
    });
  });
}

module.exports = {
  getTeacherByID,
  getClassByID,
  getPupilsByID,
  getAllSubjects,
};
