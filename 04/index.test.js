const test = require('./test.json');
const data = require('./data.json');
const { bingo } = require('./index');

describe('day 4 - bingo', () => {
  it('should validate winning board with test data - 4512', () => {
    expect(bingo(test)).toEqual(4512);
  });
  it('should validate squid winning board with real data - 38913', () => {
    expect(bingo(data)).toEqual(38913);
  });
  it('should validate squid winning board with test data - 1924', () => {
    expect(bingo(test, false)).toEqual(1924);
  });
  it('should validate squid winning board with real data - 16836', () => {
    expect(bingo(data, false)).toEqual(16836);
  });
});