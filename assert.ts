export function assert(func: Function, params: Array<any>, expectedValue: any) {
  const valueRecieved = func(...params);
  return `<p>Passing: <b>${
    valueRecieved === expectedValue
  }</b>.Got: ${valueRecieved}.Expected ${expectedValue}`;
}
