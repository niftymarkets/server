const request = require('supertest');
const server = require('../server');

describe('Items routes', () => {

  describe('GET /api/items', () => {

    it('should return 200 OK', async () => {
      const res = await request(server).get('/api/items')

      expect(res.status).toBe(200);
    });


  //   it('should return json data of users', async () => {
  //     const res = await request(server).get('/')

  //     expect(res.type).toBe('application/json');
  //   });

  //   it('should have a username and password properties', async () => {
  //     const res = await request(server).get('/api/users')

  //     expect(res.text).toContain("username");
  //     expect(res.text).toContain("password");
  //   });

  });

});
