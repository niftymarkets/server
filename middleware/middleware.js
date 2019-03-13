const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const corsOptions = {
  withCredentials: true,
}

module.exports = server => {
   server.use(helmet());
   server.use(express.json());
   server.use(morgan('short'));
   server.use(cors(corsOptions));
}; 