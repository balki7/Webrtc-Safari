/**
 * @author Balki Gemirter
 * @since 25/06/2016
 *
 */
var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send('Hello World!')
});

// const pkey = fs.readFileSync('./ssl/key.pem'),
//     pcert = fs.readFileSync('./ssl/cert.pem'),
//     options = {key: pkey, cert: pcert, passphrase: '123456789'};
//
// https.createServer(options, app).listen(app.get('port'), function() {
//     console.log("Node app is running at localhost:" + app.get('port'));
// });

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
