const express = require('express');
const {
  getTeacherByID,
  getClassByID,
  getPupilsByID,
  getAllSubjects,
} = require('../db/getQueries');
const router = express.Router();

router.get('/teacher/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) throw 'Bad input';
    res.status(200).json(await getTeacherByID(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.get('/class/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) throw 'Bad input';
    res.status(200).json(await getClassByID(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.get('/pupil/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) throw 'Bad input';
    res.status(200).json(await getPupilsByID(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.get('/subjects', async (req, res, next) => {
  try {
    res.status(200).json(await getAllSubjects());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
