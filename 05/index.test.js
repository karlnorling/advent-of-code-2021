const test = require('./test.json');
const data = require('./data.json');
const { countIntersections } = require('./index');

describe('day 5 - bingo', () => {
  it('should count straight intersections over 1 - 5 with test data', () => {
    expect(countIntersections(test)).toEqual(5);
  });
  it('should count straight intersections over 1 - 5 with real data', () => {
    expect(countIntersections(data)).toEqual(5835);
  });
  it('should count straight and diagonal intersections over 1 - 12 with test data', () => {
    expect(countIntersections(test, 'two')).toEqual(12);
  });
  it('should count straight and diagonal intersections over 1 - 17013 with real data', () => {
    expect(countIntersections(data, 'two')).toEqual(17013);
  });
});