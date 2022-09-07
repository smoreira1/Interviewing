// Import stylesheets
import { longestCommonPrefixResults } from './problems/longestCommonPrefix';
import { arithmeticTripletsResults } from './problems/numberOfArithmeticTriplets';
import { palindromeNumberResults } from './problems/palindromeNumber';
import { romainToIntResults } from './problems/romainToInteger';
import { uniquePathsIIIResults } from './problems/uniquePathsIII';
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
