const { dive, diveWithAim } = require('./index');
const data = require('./data.json');
const test = require('./test.json');

describe('dive', () => {
  it('get the cords with test data', () => {
    expect(dive(test)).toEqual(150);
  });
  it('get the cords with real data', () => {
    expect(dive(data)).toEqual(2073315);
  })
});

describe('diveWithAim', () => {
  it('get the cords with test data', () => {
    expect(diveWithAim(test)).toEqual(900);
  });
  it('get the cords with real data', () => {
    expect(diveWithAim(data)).toEqual(1840311528);
  })
});