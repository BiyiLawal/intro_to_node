//importing http module
const http = require("http");

const behaviour = (req, res) => {
    console.log(req.method);
    console.log(req.url);

    if(req.method == "POST" && req.url == "/test"){
        res.write("Hello from Post");
    } else if(req.method == "GET" && req.url == "/"){
        res.write("Hello from Get!!")
    }
    res.end()
}
//creating a server
// const server = http.createServer((req, res) => {
//     // res.write("Hi, I'm Biyi");
//     // res.end();
// });
const server = http.createServer(behaviour);

//listening
server.listen(8900, () => {
    console.log("The server is running at port 8900");
});
