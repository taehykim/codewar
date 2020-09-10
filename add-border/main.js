function addBorder(picture) {
  const elmLen = picture[0].length;
  const bordered = [];
  let border = "";
  for (let i = 0; i < elmLen + 2; i++) border += "*";
  bordered.push(border, border);

  for (let i = 0; i < picture.length; i++)
    bordered.splice(i + 1, 0, "*" + picture[i] + "*");

  return bordered;
}
