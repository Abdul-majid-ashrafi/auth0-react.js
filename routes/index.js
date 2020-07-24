var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.send('Auth0 Webapp sample Nodejs');
// });


const jwt = require('express-jwt');
// const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-e--008ul.au.auth0.com/.well-known/jwks.json'
    }),

    //  identifier for your API,
    //  for example, https://quickstarts/api. 
    //  You will use the identifier as an audience later, 
    //  when you are configuring the Access Token verification. 
    //  Leave the Signing Algorithm as RS256.
    // NOTE: remove audience if not need
    // audience: 'https://quickstarts/api',
    issuer: 'https://dev-e--008ul.au.auth0.com/',
    algorithms: ['RS256']
});


router.get('/verifytoken', checkJwt, function (req, res) {
    // http://localhost:3000/verifytoken 
    // token will be pas from header with bearer like this Authorization : Bearer sdasd...ds
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
});

module.exports = router;
