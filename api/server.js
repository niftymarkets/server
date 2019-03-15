const middleware = require('../middleware/middleware');
const express = require('express');
const itemsRoutes = require('./routes/itemsRoutes');
const userRoutes = require('./routes/userRoutes');

const server = express();

middleware(server);

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' });
  
});

server.use('/api/items', itemsRoutes);
server.use('/api/users', userRoutes);

module.exports = server