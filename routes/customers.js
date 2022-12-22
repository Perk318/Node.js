const express = require('express');
const router = express.Router();
const customers = require('../controllers/customers');




/* GET buildings by ID. */
// http://localhost:3000/buildings/5


router.get('/:id', async function(req, res, next) {
    try {
      res.json(await customers.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting columns `, err.message);
      next(err);
    }
});


router.get('/', async function(req, res, next) {
  try {
    res.json(await customers.getALL( req.query));
  } catch (err) {
    console.error(`Error while getting customers `, err.message);
    next(err);
  }
});

router.get('/new', async function(req, res, next) {
  try {
    res.json(await customers.create( req.query));
  } catch (err) {
    console.error(`Error while getting customers `, err.message);
    next(err);
  }
});

module.exports = router;