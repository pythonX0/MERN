// routes/helloRoutes.js - Hello world route definitions
const express = require('express');
const router = express.Router();
const courseController = require('./../controllers/courseController')

// GET /api/get-course-detail - Basic hello world
router.get('/get-course-detail', courseController.getCourseDetail);
router.post('/create-course', courseController.getCourseDetail);


module.exports = router;