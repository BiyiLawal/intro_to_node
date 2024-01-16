//importing http module
const http = require("http");


//creating a server
const server = http.createServer((req, res) => {
    res.write("Hi, I'm Biyi");
    res.end();
});

//listening
server.listen(8900, () => {
    console.log("The server is running at port 8900");
});
