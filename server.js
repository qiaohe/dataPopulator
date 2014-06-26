var restify = require('restify');
var server = restify.createServer();

server.listen(8080, function () {
    console.log('listening at %s', server.url);
});
var dataProxy = require('./dataproxy');


server.get('/members', function respond(req, res, next) {
    dataProxy.get("FIND_MEMBERS", function (err, data) {
        res.end(data);
    });
});

server.get('/members/:memberId', function respond(req, res, next) {
    dataProxy.get("FIND_MEMBER_BY_ID", function (err, data) {
        res.end(data);
    }, {'id': req.params['memberId']});
});
