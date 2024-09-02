const request = require('supertest');
const server = require('.'); // Adjust path as necessary

afterAll(() => {
  server.close();
});

describe('Hello Word Returns', () => {
  it('should return 200 OK for /api route', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });

  it('should return Hello World', async () => {
    const res = await request(server).get('/');
    expect(res.text).toBe('Hello world!');
  });
});
