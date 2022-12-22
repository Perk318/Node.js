const express = require('express');
const router = express.Router();
const buildings = require('../controllers/buildings');




/* GET buildings by ID. */
// http://localhost:3000/buildings/5


router.get('/:id', async function(req, res, next) {
    try {
      res.json(await buildings.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting columns `, err.message);
      next(err);
    }
});


router.get('/', async function(req, res, next) {
  try {
    res.json(await buildings.getALL( req.query));
  } catch (err) {
    console.error(`Error while getting columns `, err.message);
    next(err);
  }
});

router.get('/:id/:batteries', async function(req, res, next) {
    try {
      res.json(await buildings.getBats(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting columns `, err.message);
      next(err);
    }
  });







module.exports = router;