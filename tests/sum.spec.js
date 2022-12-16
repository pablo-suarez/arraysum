const { sum } = require('../controllers/sum');

//Unit Testing for functionality of the logic
describe('Logical functionality test', () => {
  test('Console log result tests', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    sum('1,9,5,0,20,-4,12,16,7 12');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy.mock.calls).toContainEqual(['5, 7'], ['0, 12'], ['-4, 16']);
    logSpy.mockRestore();
  });
  test('Console log result test 2', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    sum('6,3,10,4,8,7,2,1,-1 9');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy.mock.calls).toContainEqual(['6, 3'], ['10, -1'], ['8, 1'], ['7, 2']);
    logSpy.mockRestore();
  });

  test('Console log result test 3', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    sum('2,5,-4,8,1,0,6,11,12 6');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy.mock.calls).toContainEqual(['5, 1'], ['0, 6']);
    logSpy.mockRestore();
  });
})

