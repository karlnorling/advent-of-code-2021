
function dive (data) {
  const cords = {
    x: 0,
    y: 0
  };

  data.forEach(({ command, units }) => {
    switch (command) {
      case 'up':
        cords.y = cords.y - units;
        break;
      case 'down':
        cords.y = cords.y + units;
        break;
      case 'forward':
        cords.x = cords.x + units;
        break;
    }
  });
  return cords.x * cords.y;
}

/*

    down X increases your aim by X units.
    up X decreases your aim by X units.
    forward X does two things:
        It increases your horizontal position by X units.
        It increases your depth by your aim multiplied by X
*/

function diveWithAim (data) {
  const cords = {
    x: 0,
    y: 0,
    aim: 0,
  };

  data.forEach(({ command, units }) => {
    switch (command) {
      case 'up':
        cords.aim = cords.aim - units;
        break;
      case 'down':
        cords.aim = cords.aim + units; // 5
        break;
      case 'forward':
        cords.x = cords.x + units;
        cords.y = (cords.aim === 0) ? cords.y : cords.y + cords.aim * units; // 5
        break;
    }
  });
  return cords.x * cords.y;
}

module.exports = {
  dive,
  diveWithAim
};