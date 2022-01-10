const http = require('http');

const server = http.createServer((req,res) => {
    res.write(req.url+"nodemon app");
    res.end();
})

server.listen(3000, () =>{
    console.log('Server localhost:3000 uzerinde ayakta')
})