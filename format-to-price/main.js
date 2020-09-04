var numberToPrice = function (number) {
  if (typeof number !== "number") return "NaN";
  const negative = number.toString().match(/[-]/g);
  const numbers = number.toString().match(/\d+/g);

  const pre = numbers[0];
  const decimals = numbers[1];
  const preDigits = pre.split("");

  let formatted = [];
  let count = 0;
  for (let i = pre.length - 1; i >= 0; i--) {
    if (i !== pre.length - 1 && count % 3 === 0) formatted.push(",");
    formatted.push(preDigits[i]);
    count++;
  }

  formatted = formatted.reverse().join("");

  if (negative) formatted = negative[0] + formatted;
  if (numbers.length === 1) return formatted + "." + "00";
  if (decimals.length < 2) return formatted + "." + decimals + "0";
  return formatted + "." + decimals.substring(0, 2);
};

// clever solution using regex
// var numberToPrice = function (n) {
//   return typeof n != "number"
//     ? "NaN"
//     : n
//         .toFixed(3)
//         .replace(/\d$/, "")
//         .replace(/(\d)(?=(?:\d{3})+\.)/g, "$1,");
// };
