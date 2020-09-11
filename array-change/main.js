function arrayChange(inputArray) {
  let moveCount = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (i === 0) continue;
    if (inputArray[i] <= inputArray[i - 1]) {
      moveCount += inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] = inputArray[i - 1] + 1;
    }
  }
  return moveCount;
}
