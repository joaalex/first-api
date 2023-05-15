const serveData = require('node:http');
const dataFile = require('./logs.js')
const { getAge } = require('./logs.js');

const hostname = 'localhost';
const port = 3000;

const server = serveData.createServer((req, res) => { 

  
});

server.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

dataFile.fullname()
dataFile.getAge()
console.log("how far")



