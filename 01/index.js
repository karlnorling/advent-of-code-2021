function getTestResult(data) {
  const results = [];
  data.forEach((depth, i) => {
    if (data[i+1] && depth < data[i+1]) {
      results.push({
        currentDepth: depth,
        nextDepth: data[i+1]
      });
    }
  });
  return results;
};

function getSumTestResults(data) {
  const results = [];
  const sumDepth = [];
  data.forEach((depth, i) => {
    const sum = [data[i-1], depth, data[i+1]].reduce((a, b) => (a && b) ? a + b : false);
    if (sum) {
      sumDepth.push(sum);
    }
  });

  sumDepth.forEach((depth, i) => {
    if (sumDepth[i+1] && depth < sumDepth[i+1]) {
      results.push({
        currentDepth: depth,
        nextDepth: sumDepth[i+1]
      });
    }
  });
  return results;
};

module.exports = {
  getTestResult,
  getSumTestResults
};