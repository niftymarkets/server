const request = require('supertest');
const server = require('../server');

describe('Items routes', () => {

  describe('GET /api/items', () => {

    it('should return 200 OK', async () => {
      const res = await request(server).get('/api/items')

      expect(res.status).toBe(200);
    });


    it('should return json data of items', async () => {
      const res = await request(server).get('/api/items')

      expect(res.type).toBe('application/json');
    });

    it('should have name and category properties', async () => {
      const res = await request(server).get('/api/items')

      expect(res.text).toContain("name");
      expect(res.text).toContain("category");
    });

  });

  describe('GET /api/items/:id', () => {

    it('should return 200 ok', async () => {
      const res = await request(server).get('/api/items/1')

      expect(res.status).toBe(200);
    });

    it('should return json data of the item', async () => {
      const res = await request(server).get('/api/items/1')

      expect(res.type).toBe('application/json');
    });

    it('should return the item I request', async () => {
      const res = await request(server).get('/api/items/1')

      expect(res.text).toContain("Love Ranger");
    });

  });



});
