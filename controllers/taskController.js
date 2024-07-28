import asyncHandler from 'express-async-handler'


// @desc   Task 
// @route  POST /api/task/login
// @access  Public
const getTask = asyncHandler(async (req, res) => {
    console.log('get task')
  })

  export {
    getTask
  }