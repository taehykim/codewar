function solequa(n) {
  const res = [];
  for (let i = 1; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      j = n / i;
      if ((i + j) % 2 === 0 && (j - i) % 4 === 0) {
        const x = (i + j) / 2;
        const y = (j - i) / 4;
        res.push([x, y]);
      }
    }
  }
  return res;
}
