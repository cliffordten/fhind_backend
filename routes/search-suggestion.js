const express = require('express');
// const {Hello} = require('../controllers/hello');
const { Search } = require('../controllers/search-suggestion');


const router = express.Router({ mergeParams: true });


router
  .route('/')
  .get( Search)

module.exports = router;