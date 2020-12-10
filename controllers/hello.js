const asyncHandler = require('../middleware/async');


// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
exports.Hello = asyncHandler(async (req, res, next) => {
    // user is already available in req due to the protect middleware
  
    res.status(200).json({
      success: true,
      data: "Hello Welcome to fhind backend",
    });
  });