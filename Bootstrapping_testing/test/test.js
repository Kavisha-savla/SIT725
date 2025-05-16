//test.js
const chai = require('chai');
const request = require('request');
const expect = chai.expect;

const BASE_URL = `http://localhost:${process.env.PORT || 5500}`;

describe('Fresh Fruit Market Server', () => {

  // 1. Test homepage response
  it('should return 200 on GET /', (done) => {
    request.get(`${BASE_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include('Fresh Fruit Market');
      done();
    });
  });
//2.Test that fruit.jpeg is served properly
  it('should return 200 and image/jpeg for /fruit.jpeg', (done) => {
  request.get(`${BASE_URL}/fruit.jpeg`, (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    expect(response.headers['content-type']).to.include('image/jpeg');
    done();
  });
});
//3. Test that mango.png is served properly

it('should return 200 and image/png for /mango.png', (done) => {
  request.get(`${BASE_URL}/mango.png`, (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    expect(response.headers['content-type']).to.include('image/png');
    done();
  });
});
//4. Test that strawberry.jpeg is served properly

it('should return 200 and image/jpeg for /strawberry.jpeg', (done) => {
  request.get(`${BASE_URL}/strawberry.jpeg`, (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    expect(response.headers['content-type']).to.include('image/jpeg');
    done();
  });
});
// 5. Test that CSS file is served correctly
it('should return 200 and text/css for /css/styles.css', (done) => {
  request.get(`${BASE_URL}/css/styles.css`, (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    expect(response.headers['content-type']).to.include('text/css');
    done();
  });
});

  // 6. Test that apples.png image is served
  it('should return 200 and image/png for /apples.png', (done) => {
    request.get(`${BASE_URL}/apples.png`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.include('image');
      done();
    });
  });

  // 7. Test serving of JavaScript file
  it('should return 200 and JS content for /js/scripts.js', (done) => {
    request.get(`${BASE_URL}/js/scripts.js`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.include('application/javascript');
      done();
    });
  });
  // 8. Test for 404 on non-existent route
  it('should return 404 for an invalid route', (done) => {
    request.get(`${BASE_URL}/invalidroute`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
