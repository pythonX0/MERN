// GET /api/get-course-detail
const getCourseDetail = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      name: 'Fullstack development!',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing hello request',
      error: error.message
    });
  }
};



module.exports = {
  getCourseDetail,
};