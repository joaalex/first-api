const http = require('node:http');

const hostname = 'localhost';
const port = 1234;

const server = http.createServer((req, res) => { 
  
       
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
        message: "Welcome to Node",
        course: "Bsc. Computer Science",
        level: "300"
    }));
    res.end();
})

server.listen('1234', 'localhost',() => {
    console.log(`Server running at ${hostname} on port ${port}`);
});


console.log("how far")



