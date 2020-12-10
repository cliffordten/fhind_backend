const express = require('express');
const {Hello} = require('../controllers/hello')


const router = express.Router({ mergeParams: true });


router
  .route('/')
  .get( Hello)

module.exports = router;
