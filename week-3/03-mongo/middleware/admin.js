// Middleware for handling auth
//This one doesn't use authentication the right way. We will learn how to do that in the next assignment. 
//For this one, in every authenticated requests, you need to send the username and password in the headers (and not the jwt).
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username  = req.headers.username;
    const password = req.headers.password;
    const existingAdmin = await Admin.findOne({ username });
    if(existingAdmin && existingAdmin.password === password) {
        next();

    }else{
        res.status(401).json({
            message: "Invalid credentials"
        });
    }
    
}

module.exports = adminMiddleware;