const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
// User Routes
router.post('/signup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const user = new User({username: username, password: password});
    user.save();
    res.json({message: 'User created successfully'});
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const courses = Course.find({});
    res.json({courses: courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId; 
    const username = req.headers.username;
    await User.updateOne(
        {username: username},
        {
            $push: {
                purchasedCourses: courseId
            }
        }
        
    )
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    const username = req.headers.username;
    User.findOne({username: username},
        (err, user) => {
            if(err){
                res.status(401).json({message: "Invalid credentials"});
            }else{
                if(user){
                    res.status(200).json(
                        {
                            purchasedCourses: user.purchasedCourses
                        }
                    )
                }
            }
        }
)});

module.exports = router