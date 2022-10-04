const fs = require('fs');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();


const logEvents = require('./logEvents');

myEmitter.addListener('route', (event, level, msg, statusCode) => {
    const d = new Date();
    console.log(d.toLocaleString() + ' * ' + level.toUpperCase() + ' * ' + msg + ' * ' + statusCode);
    logEvents(event, level, msg, statusCode);
});

function indexPage(path, event, res) {
    displayFile(path, res);
    myEmitter.emit('route', event, 'information--', 'the home page was visited.', "StatusCode:" + res.statusCode);
}
 

function aboutPage(path, event, res, req) {
    displayFile(path, res);
    myEmitter.emit('route', event, 'information--', 'the about page was visited.', "StatusCode:" + res.statusCode);

}

function contactPage(path, event, res) {
    displayFile(path, res);
    myEmitter.emit('route', event, 'information--', 'the contact page was visited.', "StatusCode:" + res.statusCode);
}

function subscribePage(path, event, res) {
    displayFile(path, res);
    myEmitter.emit('route', event, 'information--', 'the subscribe page was visited.', "StatusCode:" + res.statusCode);
}

function productsPage(path, event, res) {
    displayFile(path, res);
    myEmitter.emit('route', event, 'information--', 'the products page was visited.', "StatusCode:" + res.statusCode);
}


function fourOfourPage(path, event, res) {
    displayFile(path, res);
    myEmitter.emit('route', event, 'error', 'page not found ' +  event + ' route.', "StatusCode:" + res.statusCode);
   
}

function coffeeePage(path, event, res) {
    displayFile(path, res);
    myEmitter.emit('route', event, 'information--', 'no coffee to server because i am a teapot.', "StatusCode:" + res.statusCode);
}

function displayFile(path, res) {
    fs.readFile(path, function(err, data) {
        if(err) {
            console.log(err);
            res.end();
        } else {
            console.log('file was served.')
            res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        };   
    });
};

module.exports = {
    indexPage,
    aboutPage,
    contactPage,
    subscribePage,
    productsPage,
    coffeeePage,
    fourOfourPage,
}
