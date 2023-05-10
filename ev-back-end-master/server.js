const express = require('express');
const bodyParser = require('body-parser');
const products = require("./product/product.router");
/*const passport = require('passport');*/
const cookieSession = require('cookie-session');
//require('./passport');

const app = express();

const db = require('./db')

const userRouter = require('./routes/users')

port = process.env.port || 3000;

app.listen(port, function() {
    console.log("Sucessfully running");
})

app.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Content-Disposition", "application/binary");
    res.header("X-Frame-Options", "sameorigin");
    if (req.method == "OPTIONS") {
        res.send(200);
    } else {
        next();
    }
});

app.use('/user', userRouter);
app.use('/upload', express.static('upload/images'));
app.use("/product", products);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

/* app.use(cookieSession({
    name: 'tuto-sessin',
    keys: ['key1', 'key2']
}))
  
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}
  
app.use(passport.initialize());
app.use(passport.session());
  
app.get('/', (req, res) => res.send('You are not logged in'))
app.get('/failed', (req, res) => res.send('You have failed to login'))
app.get('/good', isLoggedIn, (req, res) => res.send('Welcome Mr {req.user.displayName}!'))
  
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}));
  
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  });
  
app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})*/