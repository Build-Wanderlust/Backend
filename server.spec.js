const server = require('./server');

describe('the server', () => {
    describe('GET /', () => {

        it('should run the testing env', () => {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
});