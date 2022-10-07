const readline = require('readline-sync');

function showFibonacci() {
  const n = readline.questionInt('Quantos números da sequência de Fibonacci você deseja exibir? ');
  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return showFibonacci();
  }
  const fibonacciSequence = makeFibonacci(n);
  console.log(fibonacciSequence);
}

function makeFibonacci(n) {
  let fibonacciSequence = [1];
  for (let i = 1; i < n; i += 1) {
    const nextNum = fibonacciSequence
      .reduce((cur, acc) => (acc + cur), 1)
    fibonacciSequence.push(nextNum);
  }
  return fibonacciSequence;
}

showFibonacci();