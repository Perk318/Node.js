const express = require('express');
const router = express.Router();
const columns = require('../controllers/columns');




/* GET users by ID. */
// http://localhost:3000/users/5


router.get('/:id', async function(req, res, next) {
    try {
      res.json(await columns.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting columns `, err.message);
      next(err);
    }
});


router.get('/', async function(req, res, next) {
  try {
    res.json(await columns.getALL( req.query));
  } catch (err) {
    console.error(`Error while getting columns `, err.message);
    next(err);
  }
});

router.get('/:id/:elevators', async function(req, res, next) {
    try {
      res.json(await columns.getElev(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting columns `, err.message);
      next(err);
    }
  });







module.exports = router;