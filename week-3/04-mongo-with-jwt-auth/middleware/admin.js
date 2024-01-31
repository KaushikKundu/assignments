// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const existingAdmin = await Admin.findOne({ username });
    if(existingAdmin && existingAdmin.password === password) {
        const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message:"User exists",token});
        next();
    }else{
        res.status(401).json({
            message: "Invalid credentials"
        });
    }
}

module.exports = adminMiddleware;