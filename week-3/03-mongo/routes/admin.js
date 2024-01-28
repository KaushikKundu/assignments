const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

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
    const username = req.headers.username;
    const password = req.headers.password;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;