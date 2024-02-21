// Middleware for adding each incoming request method  and each request to the server.
function incomingReq(req, res, next) {
    console.log(`${req.method} ${req.url}`);            // Log request method and URL
    next();                                             // Calling next middleware in the chain to process through
}

module.exports = incomingReq;       // Exporting the middleware function
