var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



const result= [];



app.get('/', function(req, res) {
 res.render("index");
})

app.get( '/result', function( req, res ){
    console.log("result en el get " +result);
        res.render( 'users', { user:result } );
});

app.post("/result", function(req, res) {
 console.log("POST DATA", req.body);
const userName= req.body.userName;
const dojoLocation = req.body.dojoLocation;
const favoriteLanguage= req.body.favoriteLanguage;
const comment = req.body.comment;

const newUser = {
    userName,
    favoriteLanguage,
    comment,
    dojoLocation  
};
result.push(newUser);

console.log("este es result: "+result);
 res.redirect('/result');
})
// tell the express app to listen on port 8000
app.listen(8080, function() {
 console.log("listening on port 8080");
});