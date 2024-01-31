const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', adminMiddleware, (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    

});

router.post('/signin',  (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;


});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;