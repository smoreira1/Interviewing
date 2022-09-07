// Import stylesheets
import { longestCommonPrefixResults } from './problems/computer-science/longestCommonPrefix';
import { arithmeticTripletsResults } from './problems/computer-science/numberOfArithmeticTriplets';
import { palindromeNumberResults } from './problems/computer-science/palindromeNumber';
import { romainToIntResults } from './problems/computer-science/romainToInteger';
import { uniquePathsIIIResults } from './problems/computer-science/uniquePathsIII';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

appDiv.innerHTML =
  uniquePathsIIIResults() +
  palindromeNumberResults() +
  romainToIntResults() +
  longestCommonPrefixResults() +
  arithmeticTripletsResults();
