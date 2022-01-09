const { client, queries } = require('./index');

function postPupil({ id, fname, sname, class_id }) {
  return new Promise((res, rej) => {
    const sql = queries.postPupil
      .replace('#ID', id)
      .replace('#FNAME', fname)
      .replace('#SNAME', sname)
      .replace('#CLASS', class_id);
    client.query(sql, (err) => {
      if (err) rej(err);
      else res('Updated');
    });
  });
}

function postTeacher({ id, fname, sname }) {
  return new Promise((res, rej) => {
    const sql = queries.postTeacher
      .replace('#ID', id)
      .replace('#FNAME', fname)
      .replace('#SNAME', sname);
    client.query(sql, (err) => {
      if (err) rej(err);
      else res('Updated');
    });
  });
}

module.exports = { postPupil, postTeacher };
