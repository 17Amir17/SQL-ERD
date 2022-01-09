const express = require('express');
const {
  getTeacherByID,
  getClassByID,
  getPupilsByID,
  getAllSubjects,
} = require('../db/getQueries');
const router = express.Router();

router.get('/teacher/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) throw 'Bad input';
  res.status(200).json(await getTeacherByID(req.params.id));
});

router.get('/class/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) throw 'Bad input';
  res.status(200).json(await getClassByID(req.params.id));
});

router.get('/pupil/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) throw 'Bad input';
  res.status(200).json(await getPupilsByID(req.params.id));
});

router.get('/subjects', async (req, res) => {
  res.status(200).json(await getAllSubjects());
});

module.exports = router;
