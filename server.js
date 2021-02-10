"use strict";
const http = require("http");
const quotes = require("./quotes")
http.createServer((req, res) => {
 const index = Math.floor(Math.random() * quotes.length);
 res.writeHead(200, {"Content-type": "text/plain"});
 res.write(quotes[index]);
 res.end();
}).listen(8888);


// const randomQuote = quotes[index];


// console.log(randomQuote);