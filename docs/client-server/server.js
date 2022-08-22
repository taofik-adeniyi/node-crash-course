const http = require('http')
const fs = require('fs');
const { ok } = require('assert');
const _ = require('lodash')

const server = http.createServer((req, res)=>{
    // console.log('request made');
    // console.log(req);
    console.log(req.url, req.method);

    // lodahs
    const num = _.random(0, 20)
    console.log('num',num);

    const greet = _.once(()=>{
        console.log('hello');
    })
    greet()
    greet()
    // set header content type
    // res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Type', 'text/html')
    // res.write('Hello Taofik')
    // res.write('<h1>Hello World!</h1>')

    // sends an html file
    let path = "./docs/client-server/views/"
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-us':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end()
        }else {
            // res.write(data)
            res.end(data)
        }
    })
    // res.end()
})

server.listen(3000, 'localhost', function() {
    console.log('listening for request on port 3000');
})


// Status Codes
// 200 - ok
// 301 - Resource moved
// 404 - Not found
// 500 - Internal Server Error

//Status Codes Ranges
// 100 - information responses
// 200 - success Codes
// 300 - codes for redirects
// 400 - user or client error codes
// 500 - server error codes