const { client, queries } = require('./index');

function deletePupilByID(id) {
  return new Promise((res, rej) => {
    const sql = queries.deletePupilByID.replace('#ID', id);
    client.query(sql, (err) => {
      if (err) rej(err);
      else res('removed');
    });
  });
}

function deleteTeacherByID(id) {
  return new Promise(async (res, rej) => {
    const sql = queries.deleteTeacherByID
      .replace('#ID', id)
      .replace('#ID', id)
      .replace('#ID', id);
    try {
      await Promise.all(
        sql.split(';').map((element) => {
          return new Promise((resolve) => {
            if (!element) resolve();
            client.query(element, (err) => {
              element.replace('\r', '').replace('\n', '');
              if (err) rej(err);
              else resolve();
            });
          });
        })
      );
      res('deleted');
    } catch (error) {
      rej(error);
    }
  });
}

module.exports = { deletePupilByID, deleteTeacherByID };
