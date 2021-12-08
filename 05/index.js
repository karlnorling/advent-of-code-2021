function parseLines(lines) {
  return lines.map(line => {
    const { start, end } = line;
    if (start.x === end.x || start.y === end.y) {
      return line;
    }
  }).filter(v => !!v);
}

function incrementCords(x, y, intersections) {
  const key = `${x},${y}`
  intersections[key] = intersections[key] ? intersections[key] + 1 : 1
  return intersections;
}

function getNumbersBetween(xA, xB) {
  const [xSA, xSB] = [xA, xB].sort((a, b) => a - b);
  const numbers = [];
  for (let i = xSA; i <= xSB; i++) {
    numbers.push(i);
  }
  return numbers;
}

function detectDiagonalIntersection(start, end, intersections) {
  const xMoveIncrement = start.x < end.x ? 1 : -1
  const yMoveIncrement = start.y < end.y ? 1 : -1

  for (let x = start.x, y = start.y; true; x += xMoveIncrement, y += yMoveIncrement) {
    intersections = incrementCords(x, y, intersections)
    if (x === end.x) { // Stop
      break;
    }
  }
  return intersections;
}

function countIntersections(lines, part = 'one') {
  let intersections = {};
  
  const straightLines = parseLines(lines);
  straightLines.forEach(({ start, end }) => {
    if (start.x === end.x) {
      getNumbersBetween(start.y, end.y).forEach(x => {
        intersections = incrementCords(start.x, x, intersections);
      });
    }
    if (start.y === end.y) {
      getNumbersBetween(start.x, end.x).forEach(y => {
        intersections = incrementCords(y, start.y, intersections);
      });
    }
  });

  if (part === 'two') {
    lines.forEach(({start, end}) => {
      if (start.x !== end.x && start.y !== end.y) {
        intersections = detectDiagonalIntersection(start, end, intersections);
      }
    });
  }
  return Object.values(intersections).filter(v => v > 1).length
}

module.exports = {
  countIntersections
}