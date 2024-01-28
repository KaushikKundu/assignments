const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db");
const uuid = require('uuid')
const {id} = require('mongoose')
// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({ username });
    if(existingUser) {
        res.status.json({"User already exists": existingUser});
    }else{
        const user = new User({
            username,
            password
        })
        await user.save();
        res.status(201).json({
            message: "User created successfully"
        });
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    const admin = req.headers.username;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const courseId = uuid.v4(); 
    
    const course = new Course({
        admin,
        title,
        description,
        price,
        imageLink,
        courseId
    });
    //const existingCourse = Course.findOne({ title });
    course.save();
    res.json({message:'Course created successfully', courseId: course._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courseList = await Course.find({username: req.username}); 
    return res.json({courseList});
});

module.exports = router;