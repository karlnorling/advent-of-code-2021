function rowsToColumns (data) {
  const grid = [];
  // Rows to Columns
  data.forEach((row, i) => {
    row.split('').forEach((value, j) => {
      if (grid[j]) {
        grid[j].push(Number(value));
      } else {
        grid[j] = [Number(value)];
      }
    });
  });
  return grid;
}

function countZerosOnes (data) {
  const gammaGrid = rowsToColumns(data);
  let zeros = [];
  let ones = [];
  gammaGrid.forEach((col, i) => {
    zeros[i] = col.filter(value => value === 0).length;
    ones[i] = col.filter(value => value === 1).length;
  });
  return { zeros, ones }
}

function getPowerConsumption(data) {
  const gammaGrid = rowsToColumns(data);

  let gammaBits = '';
  let epsilonBits = '';
  gammaGrid.forEach(col => {
    const zeros = col.filter(value => value === 0).length;
    const ones = col.filter(value => value === 1).length;
    gammaBits = `${gammaBits}${ones > zeros ? '1' : '0'}`;
    epsilonBits = `${epsilonBits}${ones > zeros ? '0' : '1'}`; 
  });
  
  const gammaRate = parseInt(gammaBits, 2);
  const epsilonRate = parseInt(epsilonBits, 2);

  return gammaRate * epsilonRate;
}



function getLifeSupportRating (data) {
  const rawData = data;

  function getOxygenRating(data, i = 0) { 

    const { zeros, ones } = countZerosOnes(data);
    let mostCommonBit = 1;
    if (zeros[i] > ones[i]) {
      mostCommonBit = 0;
    }
    const filtered = data.filter((row) => Number(row[i]) === mostCommonBit);
    if (filtered.length === 1) {
      return filtered[0];
    }
    return getOxygenRating(filtered, i + 1);
  }

  function getCO2Rating(data, i = 0) {
    const { zeros, ones } = countZerosOnes(data);
    let leastCommonBit = 0;
    if (zeros[i] > ones[i]) {
      leastCommonBit = 1;
    }
    const filtered = data.filter((row) => Number(row[i]) === leastCommonBit);
    if (filtered.length === 1) {
      return filtered[0];
    }
    return getCO2Rating(filtered, i + 1);
  }

  const ox = parseInt(getOxygenRating(data), 2);
  const co2 = parseInt(getCO2Rating(data), 2);

  return ox*co2;
};

module.exports = {
  getPowerConsumption,
  getLifeSupportRating
};