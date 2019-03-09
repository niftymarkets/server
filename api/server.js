const middleware = require('../middleware/middleware');
const express = require('express');
const itemsRoutes = require('./routes/itemsRoutes');

const server = express();

middleware(server);


server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' });
  
});

server.use('/api/items', itemsRoutes);

module.exports = server