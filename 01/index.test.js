const { getTestResult, getSumTestResults } = require('./index');
const data = require('./data.json');
const test = require('./test.json');

describe('01', () => {
  it('should validate test example - 7', () => {
    const results = getTestResult(test);
    expect(results.length).toEqual(7);
  });

  it('should validate data example - 1466', () => {
    const results = getTestResult(data);
    expect(results.length).toEqual(1466);
  });

  it('should validate test sum example - 5', () => {
    const results = getSumTestResults(test);
    expect(results.length).toEqual(5);
  });

  it('should validate data sum example - 1491', () => {
    const results = getSumTestResults(data);
    expect(results.length).toEqual(1491);
  });
});