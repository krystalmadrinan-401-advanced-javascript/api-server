'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 3001;

server.use(middlewares)
server.use(router)

// ACTUALLY GET JSON
let data = require('./data/db.json');

// ROUTES

server.get('/', function (req, res) {
    res.send('TO home');
});

server.get('/categories', function catHandler (req, res) {
    
    res.send(data.categories);
});


server.listen(3000, () => {
    console.log('JSON Server is running')
})

