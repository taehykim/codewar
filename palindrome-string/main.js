function palindromeRearranging(inputString) {
  const charCounts = [...inputString].reduce((counts, char) => {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
    return counts;
  }, {});

  return (
    Object.values(charCounts).filter((count) => count % 2 !== 0).length <= 1
  );
}
