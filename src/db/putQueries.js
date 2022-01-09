const { client, queries } = require('./index');

function isNumber(n) {
  try {
    return !isNaN(Number(n));
  } catch (error) {
    return false;
  }
}

function getSet({ ...ats }) {
  let set = '';
  for (const att in ats) {
    if (ats[att] === undefined) continue;
    if (isNumber(ats[att])) {
      set += `${att} = ${ats[att]}, `;
    } else {
      set += `${att} = "${ats[att]}", `;
    }
  }
  return set.slice(0, -2);
}

function updatePupil(id, first_name, second_name, Class, targetID) {
  return new Promise((res, rej) => {
    const sql = queries.updatePupil
      .replace('#SET', getSet({ id, first_name, second_name, Class }))
      .replace('#ID', targetID);
    console.log(sql);
    client.query(sql, (err) => {
      if (err) rej(err);
      else res('Updated');
    });
  });
}

function updateClass(id, Teachers_id, targetID) {
  return new Promise((res, rej) => {
    const sql = queries.updateClass
      .replace('#SET', getSet({ id, Teachers_id }))
      .replace('#ID', targetID);
    client.query(sql, (err) => {
      if (err) rej(err);
      else res('Updated');
    });
  });
}

module.exports = { updatePupil, updateClass };
