/* 
  _____                   __                        ____   ____  _   _                 
 |_   _|                 |  ]                      |_  _| |_  _|(_) / |_               
   | |     __   _    .--.| | __   _   _ .--..--.     \ \   / /  __ `| |-',--.   .---.  
   | |   _[  | | | / /'`\' |[  | | | [ `.-. .-. |     \ \ / /  [  | | | `'_\ : / /__\\ 
  _| |__/ || \_/ |,| \__/  | | \_/ |, | | | | | |      \ ' /    | | | |,// | |,| \__., 
 |________|'.__.'_/ '.__.;__]'.__.'_/[___||__||__]      \_/    [___]\__/\'-;__/ '.__.' 
 
 Dependencies                                                                                    
*/

var  express = require('express')
  ,stylus = require('stylus')
  ,nib = require('nib')
;
  
var app = express();

function compile (str, path){
  return stylus(str)
    .set('filename',path)
    .use(nib());
}

app.set('views', __dirname +'/app/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
  {src: __dirname +'/app/styles'
  ,compile: compile
  }
));
app.use(express.static(__dirname+'/app/public'));
app.use('/styles',express.static(__dirname+'/app/styles'));
app.use('/scripts',express.static(__dirname+'/app/scripts'));
app.use('/images',express.static(__dirname+'/app/images'));
app.use('/bower_components',express.static(__dirname+'/app/bower_components'));

app.get('/', function (req, res){
  res.render('index',
  {title: 'Ludum Vitae Home'});
});
app.get('/partials/*', function(req, res){
  res.render(__dirname+'/app/partials/' + req.params[0]);
})

app.listen(process.env.PORT, process.env.IP)
