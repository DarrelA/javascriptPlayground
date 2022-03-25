const { Engine, Render, Runner, World, Bodies, Body } = Matter;
const width = 810;
const height = 810;
const cells = 18;
const unitLength = width / cells;

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
  Bodies.rectangle(width / 2, 0, width, 1, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 1, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 1, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 1, height, { isStatic: true }),
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

const grid = Array(cells) // row
  .fill(null)
  .map(() => Array(cells).fill(false)); // column

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

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
      nextRow >= cells ||
      nextColumn < 0 ||
      nextColumn >= cells
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
      columnIndex * unitLength + unitLength / 2, // x-axis
      rowIndex * unitLength + unitLength, // y-axis
      unitLength, // width of a single cell
      6, // height of wall
      { isStatic: true }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open === true) return;
    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength,
      rowIndex * unitLength + unitLength / 2,
      6,
      unitLength,
      { isStatic: true }
    );
    World.add(world, wall);
  });
});

const goal = Bodies.rectangle(
  width - unitLength / 2,
  height - unitLength / 2,
  unitLength * 0.4,
  unitLength * 0.4,
  { isStatic: true }
);
World.add(world, goal);

const start = Bodies.circle(unitLength / 2, unitLength / 2, unitLength * 0.2);
World.add(world, start);

document.addEventListener('keydown', (event) => {
  const { x, y } = start.velocity;

  if (event.code === 'KeyW' || event.code === 'ArrowUp')
    Body.setVelocity(start, { x, y: y - 5 });
  if (event.code === 'KeyA' || event.code === 'ArrowLeft')
    Body.setVelocity(start, { x: x - 5, y });
  if (event.code === 'KeyS' || event.code === 'ArrowDown')
    Body.setVelocity(start, { x, y: y + 5 });
  if (event.code === 'KeyD' || event.code === 'ArrowRight')
    Body.setVelocity(start, { x: x + 5, y });
});
