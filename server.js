// Require the http module.
const http = require('http');

const routes = require('./routes.js');
// The Node.js file system module allows you to work with the file system on your computer.

const EventEmitter = require('events');
const { strict } = require('assert');
const eventEmitter = new EventEmitter ();

// eventEmitter.on('404', () => {
//     console.log('404: Page not found...redirecting to home');
//   });
// //   eventEmitter.on('301', () => {
// //     console.log('301: redirecting to ' + path);
// //   });
//   eventEmitter.on('200', () => {
//     console.log('200: Page loaded successfully');
//     console.log("UserName: ", process.env.USERDOMAIN)
//   });

// Create a new HTTP server object.
const server = http.createServer((req, res) => {
// logs a msg to the console when a request is made.
console.log('a request was made');
console.log("page url = " + req.url)


//  sets header content type 
res.setHeader('Content-Type', 'text/html')

let path = './views/';
switch(req.url) {
    case "/":
        path += "index.html";
        res.statusCode = 200;
        routes.indexPage(path, req.url, res);
        // eventEmitter.emit('200', 'event occurred');
        console.log("Homepage")
        break;

    case "/about":
        path += "about.html";
        res.statusCode = 200;
        routes.aboutPage(path, req.url, res);
        // eventEmitter.emit('200');
        console.log("About Page");
        break;

    case "/about-me":
        res.statusCode = 301;
        eventEmitter.emit('301', 'event occurred')
        res.setHeader('Location', '/about');
        console.log("Redirect to About page ");
        break;

    case "/contact":
        path += "contact.html";
        res.statusCode = 200;
        routes.contactPage(path, req.url, res);
        // eventEmitter.emit('200');
        console.log("Contact page");
        break;

    case "/products":
        path += "products.html";
        res.statusCode = 200;
        routes.productsPage(path, req.url, res);
        // eventEmitter.emit('200');
        console.log("Product page");
        break;

    case "/subscribe":
        path += "subscribe.html";
        res.statusCode = 200;
        routes.subscribePage(path, req.url, res);
        // eventEmitter.emit('200');
        console.log("Subscribe page")
        break;

    case "/coffeee":
        path += "coffeee.html";
        res.statusCode = 418;
        routes.coffeeePage(path, req.url, res);
        break;

    case "/whereitgo":
        path += "whereitgo.html";
        res.statusCode = 410;
        routes.whereitgoPage(path, req.url, res);
        break;

    case "/weather":
        path += "weather.html";
        res.statusCode = 200;
        routes.whereitgoPage(path, req.url, res);
        break;

        default: 
        path += '404.html';
        res.statusCode = 404;
        routes.fourOfourPage(path, req.url, res);
        // eventEmitter.emit('404');
        
        break;
}

});

server.listen(8000, 'localhost', () => {
//  Listen for requests on port 8000.
    console.log('listening on port 8000 for requests');
// Logs a message to the console that the server was started.
});