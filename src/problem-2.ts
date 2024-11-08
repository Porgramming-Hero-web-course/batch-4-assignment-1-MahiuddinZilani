{
  const removeDuplicates = (arrayOfNumber: number[]): number[] => {
    const uniqueArray = arrayOfNumber.filter((value, index) => {
      return arrayOfNumber.indexOf(value) === index;
    });
    return uniqueArray;
  };

  const result = removeDuplicates([1, 1, 1, 1, 2, 2, 3, 4, 4, 5]);
  console.log(result);
}
