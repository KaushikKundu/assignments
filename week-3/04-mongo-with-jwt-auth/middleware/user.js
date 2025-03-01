async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username  = req.headers.username; 
    const password = req.headers.password;
    const user = await User.findOne({username});
    if(user && user.password === password) {

        const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({message:"User exists",token});
        next();
    }else{
        res.json({message:"Invalid credentials"})
    }
}

module.exports = userMiddleware;