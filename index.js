const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(3000, '192.168.0.66', function() {
    server.close(function() {
        server.listen(3000, '192.168.0.66')
    })
});