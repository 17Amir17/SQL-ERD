const express = require('express');
const router = express.Router();
const { updatePupil, updateClass } = require('../db/putQueries');

function isNumberOrUndefined(variable) {
  try {
    return variable === undefined || !isNaN(Number(variable));
  } catch (error) {
    return false;
  }
}

router.put('/pupil/:id', async (req, res, next) => {
  try {
    const targetID = req.params.id;

    const { id, fname, sname, class_id } = req.body;
    if (
      !isNumberOrUndefined(class_id) ||
      !targetID ||
      isNaN(Number(targetID)) ||
      !isNumberOrUndefined(id)
    )
      throw 'invalid input';
    res.status(200).json({
      response: await updatePupil(id, fname, sname, class_id, targetID),
    });
  } catch (error) {
    next(error);
  }
});

router.put('/class/:id', async (req, res, next) => {
  try {
    const targetID = req.params.id;

    const { class_id, teacher_id } = req.body;
    if (
      !isNumberOrUndefined(class_id) ||
      !targetID ||
      isNaN(Number(targetID)) ||
      !isNumberOrUndefined(teacher_id)
    )
      throw 'invalid input';
    res.status(200).json({
      response: await updateClass(class_id, teacher_id, targetID),
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
