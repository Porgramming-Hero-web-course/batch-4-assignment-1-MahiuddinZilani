{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.toLowerCase().split(" ");
    // const words = sentence.split(" ");
    let count = 0;
    for (const w of words) {
      if (w === word.toLowerCase()) {
        count++;
      }
    }
    return count;
  };

  console.log(
    countWordOccurrences(
      "I love typescript and typescript is easy to use ",
      "typescript"
    )
  );
}
