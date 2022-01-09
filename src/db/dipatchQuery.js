function dispatchQuery(client, sql) {
  return new Promise((res, rej) => {
    client.query(sql, (err) => {
      if (err) rej(err);
      else res();
    });
  });
}

module.exports = dispatchQuery;
