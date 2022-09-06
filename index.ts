// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface Results {
  amount: number;
  path: string[];
}

interface Postion {
  x: number;
  y: number;
}

interface GridSpecifications {
  startingPosition: Postion;
  endingPosition: Postion;
  amountOfSpace: number;
  amountOfObstacles: number;
}

function getTargetSquare(grid: number[][], targetSquare: number): Postion {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return { x: i, y: j };
      }
    }
  }
  throw 'Target Does Not Exist';
}

function getBlockingSquaresAmount(grid: number[][]) {
  let blockingSquaresAmount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === -1) {
        blockingSquaresAmount++;
      }
    }
  }
  return blockingSquaresAmount;
}

function amountOfSpaces(grid: number[][]) {
  let amounts = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      amounts++;
    }
  }
  return amounts;
}

function uniqueSearch(grid: number[][]): number {
  let results: Array<Results> = [];
  let gridSpecifications: GridSpecifications = {
    startingPosition: getTargetSquare(grid, 1),
    endingPosition: getTargetSquare(grid, 2),
    amountOfObstacles: getBlockingSquaresAmount(grid),
    amountOfSpace: amountOfSpaces(grid),
  };

  for (let i = gridSpecifications.startingPosition.x; i < grid.length; i++) {
    results.push({ amount: 0, path: [] });
    for (
      let j = gridSpecifications.startingPosition.y;
      j < grid[i].length;
      j++
    ) {
      if (grid[i][j] === -1) {
        results.splice(i);
        break;
      }
      results[i].amount++;
      results[i].path.push(`(${i} , ${j})`);
      if (
        i === gridSpecifications.endingPosition.x &&
        j === gridSpecifications.endingPosition.y
      ) {
        break;
      }
    }
    if (
      results[i] &&
      results[i]?.amount !==
        gridSpecifications.amountOfSpace - gridSpecifications.amountOfObstacles
    ) {
      delete results[i];
    }
  }
  return results.length;
}

function assert(grid: number[][], expectedValue: number) {
  return `Passing : ${uniqueSearch(grid) === expectedValue} Got: ${uniqueSearch(
    grid
  )} Expected: ${expectedValue}`;
}

function example1() {
  const grid = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ];
  return assert(grid, 2);
}

function example2() {
  const grid = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ];
  return assert(grid, 4);
}

function example3() {
  const grid = [
    [0, 1],
    [2, 0],
  ];
  return assert(grid, 0);
}

appDiv.innerHTML = `<p>${example1()}</P> ------ <p>${example2()}</p> ----- <p>${example3()}</p>`;
