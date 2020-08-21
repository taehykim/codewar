// output
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

function kebabize(str) {
  var strArr = str.split("");
  var kebabStr = "";
  console.log(strArr);
  var origLength = strArr.length;
  for (var i = 0; i < origLength; i++) {
    if (isLetter(strArr[i])) {
      if (kebabStr === "" && strArr[i].toUpperCase() === strArr[i]) {
        kebabStr += strArr[i].toLowerCase();
        continue;
      }

      if (strArr[i].toUpperCase() === strArr[i]) {
        kebabStr += "-" + strArr[i].toLowerCase();
      } else {
        kebabStr += strArr[i];
      }
    } else {
      continue;
    }
  }
  return kebabStr;
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

// clever solution

function kebabize2(str) {
  return str
    .replace(/[^a-z]/gi, "")
    .replace(/^[A-Z]/, (c) => c.toLowerCase())
    .replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
