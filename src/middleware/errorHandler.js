function errorHandler(err, req, res, next) {
  return req.status(500).json({ error: err });
}

module.exports = errorHandler;
