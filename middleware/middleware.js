const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const corsOptions = {
  credentials: true,
}

module.exports = server => {
   server.use(cors(corsOptions));
   server.use(helmet());
   server.use(express.json());
   server.use(morgan('short'));
}; 