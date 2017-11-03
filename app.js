var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


//routes
// Home route
app.get('/', routes.home);

//movie single page route
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//page not found route
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);