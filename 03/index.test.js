const { getPowerConsumption, getLifeSupportRating } = require('./index');
const data = require('./data.json');
const test = require('./test.json');

describe('03', () => {
  it('getPowerConsumption with test data', () => {
    expect(getPowerConsumption(test)).toEqual(198);
  });
  it('getPowerConsumption with real data', () => {
    expect(getPowerConsumption(data)).toEqual(3912944);
  })
  it('getLifeSupportRating with test data', () => {
    expect(getLifeSupportRating(test)).toEqual(230);
  });
  it('getLifeSupportRating with real data', () => {
    expect(getLifeSupportRating(data)).toEqual(4996233);
  });
});
