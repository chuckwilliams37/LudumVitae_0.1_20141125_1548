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
  ,https = require('https')
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

/*

MongoLabConnection

*/



// var getIsaaSessionToken = function () {
//   console.log('getIsaaSessionToken()');
//   var encodedKey = "NDQ2OjZhMjJmODUzN2EyMWNlNTAyNjc1ODM3MDg5OWNiMjJl"
//     ,headers = {
//       "Authorization" : "Basic " + encodedKey   
//     },
//     options = {
//       host : "oauth.isaacloud.com",
//       method : 'POST',
//       path : "/token",
//       headers : headers
//     },
//     req = https.request( options, function (res){
//       console.log('STATUS: ' + res.statusCode);
//       console.log('HEADERS: ' + JSON.stringify(res.headers));
//       res.setEncoding('utf8');
//       res.on('data',function ( chunk ) {
//         console.log ("isaac response: " , chunk );
//       });
//     })
//   ;
//   req.write(JSON.stringify({'grant_type':'client_credentials'}));
//   req.on('error', function(e) {
//     console.log('problem with request: ' + e.message, e);
//   });
//   req.end();
  
// };

/**************************************************************************************/




app.get('/', function (req, res){
  res.render('index',
  {title: 'Ludum Vitae Home'});
});
app.get('/partials/*', function(req, res){
  res.render(__dirname+'/app/partials/' + req.params[0]);
})

app.listen(process.env.PORT, process.env.IP)
