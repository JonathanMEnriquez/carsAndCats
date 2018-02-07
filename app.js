var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('client request URL: ', request.url);

    if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car1.jpg') {
        fs.readFile('./images/car1.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car2.jpg') {
        fs.readFile('./images/car2.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car3.jpg') {
        fs.readFile('./images/car3.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car4.jpg') {
        fs.readFile('./images/car4.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car5.jpg') {
        fs.readFile('./images/car5.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat3.jpg') {
        fs.readFile('./images/cat3.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat4.jpeg') {
        fs.readFile('./images/cat4.jpeg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat5.jpeg') {
        fs.readFile('./images/cat5.jpeg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('views/carsForm.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
});

server.listen(6789);

console.log('Runing in localhost at port 6789')