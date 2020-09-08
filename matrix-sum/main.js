function matrixElementsSum(matrix) {
  let total = 0;
  const hauntedIndex = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) hauntedIndex.push(j);
      else if (!hauntedIndex.includes(j)) total += matrix[i][j];
    }
  }
  return total;
}
