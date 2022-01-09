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

function getSubjectsSQL(subjects, id) {
  if (!subjects || typeof subjects != 'object') return false;
  let sql = '\n' + queries.postTeachersSubjects;
  for (const s of subjects) {
    sql += `(${id}, "${s}"),`;
  }
  return sql.slice(0, -1) + ';';
}

function postTeacher({ id, fname, sname, subjects }) {
  return new Promise((res, rej) => {
    const subjectsSQL = getSubjectsSQL(subjects, id);
    let sql = queries.postTeacher
      .replace('#ID', id)
      .replace('#FNAME', fname)
      .replace('#SNAME', sname);
    console.log(sql);
    client.query(sql, (err) => {
      if (err) rej(err);
      else if (subjectsSQL) {
        client.query(subjectsSQL, (err) => {
          if (err)
            rej({
              message: 'Posted only teacher without subjects\n' + err.message,
            });
          else res('Updated');
        });
      } else res('Updated');
    });
  });
}

module.exports = { postPupil, postTeacher };
