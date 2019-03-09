const middleware = require('../middleware/middleware')

const server = express();

middleware(server);


server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' });
  
});

module.exports = server