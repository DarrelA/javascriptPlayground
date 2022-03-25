const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const width = window.innerWidth;
const height = window.innerHeight;
const cellsHorizontal = 36;
const cellsVertical = Math.floor(cellsHorizontal / 2);
const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

const walls = [
  Bodies.rectangle(width / 2, 0, width, 5, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 5, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 5, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 5, height, { isStatic: true }),
];

World.add(world, walls);

// Maze Generation

const shuffle = (arr) => {
  let counter = arr.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

const grid = Array(cellsVertical) // row
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false)); // column

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(false));

const horizontals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const visitCell = (row, column) => {
  if (grid[row][column]) return; // Already visited.
  grid[row][column] = true; // Set visited.

  // Assemble randomly-ordered list of neighbors.
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left'],
  ]);

  for (const neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // Check if that neighbor is out of bounds.
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    )
      continue;

    // If neighbor was visited, continue to next neighbor.
    if (grid[nextRow][nextColumn]) continue;

    // Remove a wall from either horizontals or verticals.
    // Starts at index of 1 for both row and column; row stays the same.
    if (direction === 'left') {
      verticals[row][column - 1] = true;
    } else if (direction === 'right') {
      verticals[row][column] = true;
    }
    if (direction === 'up') {
      horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
      horizontals[row][column] = true;
    }

    visitCell(nextRow, nextColumn);
  }
};

visitCell(startRow, startColumn);

// false = wall & true = no wall
horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open === true) return; // do not draw wall
    const wall = Bodies.rectangle(
      // unitLength / 2 to get center point
      columnIndex * unitLengthX + unitLengthX / 2, // x-axis
      rowIndex * unitLengthY + unitLengthY, // y-axis
      unitLengthX, // width of a single cell
      6, // height of wall
      { label: 'wall', isStatic: true }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open === true) return;
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      6,
      unitLengthY,
      { label: 'wall', isStatic: true }
    );
    World.add(world, wall);
  });
});

const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.4,
  unitLengthY * 0.4,
  { label: 'goal', isStatic: true }
);
World.add(world, goal);

const start = Bodies.circle(
  unitLengthX / 2,
  unitLengthY / 2,
  (Math.min(unitLengthX, unitLengthY) / 2) * 0.2, // radius of circle
  { label: 'start' }
);
World.add(world, start);

document.addEventListener('keydown', (event) => {
  const { x, y } = start.velocity;
  const maxVelocity = 6;

  if (event.code === 'KeyW' || event.code === 'ArrowUp')
    Body.setVelocity(start, { x, y: Math.max(y - 5, -maxVelocity) });
  if (event.code === 'KeyA' || event.code === 'ArrowLeft')
    Body.setVelocity(start, { x: Math.max(x - 5, -maxVelocity), y });
  if (event.code === 'KeyS' || event.code === 'ArrowDown')
    Body.setVelocity(start, { x, y: Math.min(y + 5, maxVelocity) });
  if (event.code === 'KeyD' || event.code === 'ArrowRight')
    Body.setVelocity(start, { x: Math.min(x + 5, maxVelocity), y });
});

// Detecting a win
Events.on(engine, 'collisionStart', (event) => {
  event.pairs.forEach((collision) => {
    const labels = ['start', 'goal'];
    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      console.log('Ouch!');

      // Win animation
      world.gravity.y = 1;
      world.bodies.forEach((body) => {
        if (body.label === 'wall') Body.setStatic(body, false);
      });
    }
  });
});
