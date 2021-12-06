function gridBoard(board) {
  const y = [];
  board.forEach(row => {
    row.forEach((value, j) => {
      if (y[j]) {
        y[j].push({ value, marked: false});
      } else {
        y[j] = [{ value, marked: false}];
      }
    });
  });
  const x = board.map(row => row.map(value => ({ value, marked: false})));

  return x.concat(y);
}

function processDraw(board, draw, index) {
  return board.map(rows => {
    return rows.map(row => {
      if (row.value === draw) {
        row.marked = true;
        //console.log(row, `draw: ${draw}`, index);
      }
      return row;
    });
  });
}

function detectBingo(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].filter(row => row.marked).length === 5) {
      return board;
    }
  }
}

function calculateWinner(winner) {
  const filtered = winner.map(rows => rows.filter(row => !row.marked));
  let sum = 0;
  filtered.forEach(rows => {
    rows.forEach(row => {
      sum = sum + row.value;
    });
  });
  return sum;
}

function bingo(data, useBreak = true) {
  const { draws, boards } = data;
  let gridBoards = boards.map(board => gridBoard(board));
  let draw;
  let drawn = [];
  let winner;
  let lastWinner;

  for (let i = 0; i < draws.length; i++) {
    draw = draws[i];
    drawn.push(draw);
    for (let j = 0; j < gridBoards.length; j++) {
      if (gridBoards[j]) {
        gridBoards[j] = processDraw(gridBoards[j], draw, j);
        winner = detectBingo(gridBoards[j]);
        if (useBreak && winner) {
          break;
        } else if (winner && gridBoards.length > 1) {
          delete gridBoards[j];
          lastWinner = winner;
        }
      }
    }

    if (useBreak && winner) {
      break;
    }
    if (!useBreak && gridBoards.filter(v => !!v).length === 0) {
      break;
    }
  }
  if (!useBreak) {
    console.log('drawn', drawn, lastWinner);
    return calculateWinner(lastWinner) * draw / 2;
  } else {
    return calculateWinner(winner) * draw / 2;
  }
}

module.exports = {
  bingo
};