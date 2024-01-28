async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username  = req.headers.username;
    const password = req.headers.password;
    const existingUser = await User.findOne({ username });
    if(existingUser === null || existingUser === undefined){
       res.status(401).json({
        message: "Invalid credentials"
       })
    }else{
        if(existingUser.password === password){
            next();
        }else{
            res.status(401).json({
                message: "Invalid credentials"
            });
        }
    }
}

module.exports = userMiddleware;