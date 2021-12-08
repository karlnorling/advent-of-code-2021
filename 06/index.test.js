const test = require('./test.json');
const data = require('./data.json');
const { countFish } = require('./index');

describe('day 6 - fishing', () => {
  it('should count fish population after x days with test fish', () => {
    expect(countFish(test)).toEqual(5934);
  });
});