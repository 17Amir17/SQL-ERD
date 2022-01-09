const express = require('express');
const { deletePupilByID, deleteTeacherByID } = require('../db/deleteQueries');
const router = express.Router();

router.delete('/pupil/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id || isNaN(Number(id))) throw 'Invalid input';
    res.status(200).json({ response: await deletePupilByID(id) });
  } catch (error) {
    next(error);
  }
});

router.delete('/teacher/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id || isNaN(Number(id)) || id == '-1') throw 'Invalid input';
    res.status(200).json({ response: await deleteTeacherByID(id) });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
