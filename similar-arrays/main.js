function areSimilar(a, b) {
  if (areSame(a, b)) return true;
  for (let i = 0; i < b.length; i++) {
    const temp = b[i];
    for (let j = i + 1; j < b.length; j++) {
      b[i] = b[j];
      b[j] = temp;
      if (areSame(a, b)) return true;
      const temp2 = b[i];
      b[i] = temp;
      b[j] = temp2;
    }
  }
  return false;
}

function areSame(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}
