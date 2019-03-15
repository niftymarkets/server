const request = require('supertest');
const server = require('../server');

describe('User routes', () => {

  describe('GET /api/users', () => {

    it('should return 200 OK', async () => {
      const res = await request(server).get('/api/users')

      expect(res.status).toBe(200);
    });


    it('should return json data of users', async () => {
      const res = await request(server).get('/')

      expect(res.type).toBe('application/json');
    });

    it('should have a username and password properties', async () => {
      const res = await request(server).get('/api/users')

      expect(res.text).toContain("username");
      expect(res.text).toContain("password");
    });
  });

  describe('GET /api/users/:id', () => {

    it('should return 200 ok', async () => {
      const res = await request(server).get('/api/users/1')

      expect(res.status).toBe(200);
    });

    it('should return json data of the user', async () => {
      const res = await request(server).get('/api/users/1')

      expect(res.type).toBe('application/json');
    });

    it('should return the user I request', async () => {
      const res = await request(server).get('/api/users/1')

      expect(res.text).toContain("scott");
    });

  });

    describe('GET /api/users/:id/wishlist', () => {
      
      it('should return 200 ok', async () => {
        const res = await request(server).get('/api/users/1/wishlist')

        expect(res.status).toBe(200);
      });

      it('should return json data of the users wishlist', async () => {
        const res = await request(server).get('/api/users/1/wishlist')
  
        expect(res.type).toBe('application/json');
      });
  
      it('should return the user wishlist I request', async () => {
        const res = await request(server).get('/api/users/1/wishlist')
  
        expect(res.text).toContain("Magikarp");
        expect(res.text).not.toContain("Pikachu");
      });

    });

   

    describe('GET /api/users/:id/items', () => {

      it('should return 200 ok', async () => {
        const res = await request(server).get('/api/users/1/items')

        expect(res.status).toBe(200);
      });

      it('should return json data of the users items', async () => {
        const res = await request(server).get('/api/users/1/items')
  
        expect(res.type).toBe('application/json');
      });
  
      it('should return the users items I request', async () => {
        const res = await request(server).get('/api/users/1/items')
  
        expect(res.text).toContain("Love Ranger");
        expect(res.text).not.toContain("Pikachu");
      });
      
    });

    describe('GET /api/users/:id/transactions', () => {

      it('should return 200 ok', async () => {
        const res = await request(server).get('/api/users/1/transactions')

        expect(res.status).toBe(200);
      });

      it('should return json data of the users transactions', async () => {
        const res = await request(server).get('/api/users/1/transactions')
  
        expect(res.type).toBe('application/json');
      });
  
      it('should return the users transactions I request', async () => {
        const res = await request(server).get('/api/users/21/transactions')
  
        expect(res.body.boughtItems).not.toContain("Pikachu");
      });
      
    });

  
});