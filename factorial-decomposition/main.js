function decomp(n) {
  // n = 5
  var primeArr = [];
  for (var i = 2; i <= n; i++) {
    // i = 2, 3, 4, 5
    getPrime(i, primeArr);
    console.log("current i in decomp:", i, "current primeArr:", primeArr);
  }

  return countDistinctNum(primeArr);
}

function getPrime(num, primeArr) {
  if (num <= 3) {
    primeArr.push(num);
    return;
  }
  for (var i = 2; i < num; i++) {
    if (Math.floor(num / i) === num / i) {
      primeArr.push(i);
      break;
    }
  }

  if (i === num) {
    primeArr.push(num);
    return;
  }
  getPrime(num / i, primeArr); // getPrime()
}

function countDistinctNum(primeArr) {
  var numCount = {};
  for (var i = 0; i < primeArr.length; i++) {
    numCount[primeArr[i]] = 0;
  }

  for (var j = 0; j < primeArr.length; j++) {
    numCount[primeArr[j]]++;
  }

  //sorting object keys in ascending order
  var objKeys = Object.keys(numCount);
  for (var k = 0; k < objKeys.length; k++) {
    var currArr = objKeys.slice(k);
    var minIndex = objKeys.indexOf(Math.min(...currArr).toString());
    var temp = objKeys[k]; // k = 1, temp = 3
    objKeys[k] = objKeys[minIndex];
    objKeys[minIndex] = temp;
  }

  console.log("numCount:", numCount);
  console.log(objKeys);

  var multiplicationStr = "";
  for (var m = 0; m < objKeys.length; m++) {
    if (numCount[objKeys[m]] === 1) {
      multiplicationStr += objKeys[m];
    } else {
      multiplicationStr += objKeys[m] + "^" + numCount[objKeys[m]];
    }
    if (m != objKeys.length - 1) {
      multiplicationStr += " * ";
    }
  }
  return multiplicationStr;
}
