{
  function sumArray(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }

  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result);
}
