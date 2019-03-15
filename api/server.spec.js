const request = require('supertest');
const server = require('./server');

describe('server.js', () => {

  it('should return return 200 OK', async () => {
    const res = await request(server).get('/')

    expect(res.status).toBe(200);
  });

  it('should return a json message back saying api running', async () => {
    const res = await request(server).get('/')

    expect(res.type).toBe('application/json')
  });

});