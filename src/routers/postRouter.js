const express = require('express');
const router = express.Router();
const { postPupil, postTeacher } = require('../db/postQueries');

router.post('/pupil', async (req, res, next) => {
  try {
    const { id, fname, sname, class_id } = req.body;
    if (
      !id ||
      isNaN(Number(id)) ||
      !fname ||
      !sname ||
      !class_id ||
      isNaN(Number(class_id))
    )
      throw 'Invalid';
    res
      .status(200)
      .json({ response: await postPupil({ id, fname, sname, class_id }) });
  } catch (error) {
    next(error.message);
  }
});

router.post('/teacher', async (req, res, next) => {
  try {
    const { id, fname, sname } = req.body;
    if (!id || isNaN(Number(id)) || !fname || !sname) throw 'Invalid';
    res.status(200).json({ response: await postTeacher({ id, fname, sname }) });
  } catch (error) {
    next(error.message);
  }
});
module.exports = router;
