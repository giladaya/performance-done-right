// Check if given number is a prime
export function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

// Recursive calculate Fibonacci numbers
// Intentionally inefficient ( O(2^n) )
export function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}