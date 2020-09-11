function areSimilar(a, b) {
  let sameCount = 0;
  const diffElms = [];
  for (let i = 0; i < a.length; i++) {
    if (b[i] === a[i]) sameCount++;
    else diffElms.push(a[i], b[i]);
  }

  const unique = [...new Set(diffElms)];

  if (sameCount < a.length - 2) return false;
  if (unique.length > 2) return false;
  return true;
}
