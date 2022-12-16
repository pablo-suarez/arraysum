const { read } = require('../controllers/file');

//Unit Testing for the reading file functionality
describe('Reading file', () => {
    test('Reading file Type Data', async () => {
        return read('./files/data.txt').then((data) => {
            expect(typeof data).toBe("string");
        })
    })
});