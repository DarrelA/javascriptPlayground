## About The Project

- The Modern Javascript Bootcamp Course (2022)
- The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!
- Tutorial for Maze Game with matter.js (JavaScript with Canvas API) ([GitHub Page Demo](https://darrelasandbox.github.io/javascript-maze-game-with-matterjs/))
- [Colt Steele](https://github.com/Colt)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Notes

### Big Challenges

1.  <b>How do we generate a maze?</b> Many algorithms to generate a maze. We will have to learn a bit about a tree data structure + recursion to implement the simplest algorithm.

2.  <b>How are we going to draw this thing on the screen?</b> Use Matter JS to draw the maze onto a canvas element (brim.io/matter-js)

3.  <b>How do we make some keyboard keys control the ball?</b> Matter JS has the ability to map key presses to movements of shapes.

4.  <b>How do we detect when the ball touches the green square?</b> Matter JS has the ability to detect collisions between different shapes and report them to us as events.

&nbsp;

### Building a Maze

1. Create a grid of 'cells'.
2. Pick a random starting cell.
3. For that cell, build a randomly-ordered list of neighbors.
4. If a neighbor has been visited before, remove it from the list.
5. For each remaining neighbor, 'move' to it and remove the wall between those two cells.
6. Repeat for this new neighbor.

&nbsp;

### Notes taken from Grid Generation comment section:

```js
const grid = Array(3).fill(Array(3).fill(false));
grid[0][0] = true;
```

> <b>Stephen: </b> When you call 'fill', the value you provide is stuffed into the array at every index. In your case, you are providing a single inner array. That single array will be placed at every index of the outer array. The key here is that this is really the same array in memory! So if you change any of the inner arrays, it is essentially like changing all of them (because they are the same arrays). This is definitely not desirable, and is why we use that 'map' statement instead.

&nbsp;

### Notes taken from Updating Horizontal Wall Values comment section:

> <b>Robert:</b> Looking at the <code>shuffle(arr)</code> function, wouldn't it be easier to just choose a random index of the neighbors array?

```js
const neighbors = [
  [row - 1, col, 'up'],
  [row, col + 1, 'right'],
  [row + 1, col, 'down'],
  [row, col - 1, 'left'],
];
const randomIndex = Math.floor(Math.random() * neighbors.length);
```

> And then just move to whichever neighbor it chooses?

```js
if (neighbors[randomIndex][2] === 'left') {
  verticals[row][col - 1] = true;
}
```

> and so on

> <b>Chris:</b> There will be a lot of different ways to accomplish this, but I personally think shuffle would be best. With your option, what happens when that option is out of bounds? You will have a 25% chance of pulling that same direction again. With shuffle, if the first option doesn't work then it can't be pulled again and then it goes to one of the 3 remaining options.
