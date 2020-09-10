// function reverse(inputString) {
//   if (!inputString || inputString === "()") return "";
//   let splited = inputString.split("");

//   while (splited.includes("(")) {
//     splited = inputString.split("");

//     const tobeReversed = inputString.match(/\(\w+\)/g)[0].match(/\w+/g)[0];
//     const startIndex = inputString.indexOf(inputString.match(/\(\w+\)/g)[0]);

//     splited.splice(
//       startIndex,
//       tobeReversed.length + 2,
//       reverseString(tobeReversed)
//     );

//     inputString = splited.join("");
//   }
//   return splited.join("");
// }

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

function reverseInParentheses(inputString) {
  let start = -1;
  while ((start = inputString.lastIndexOf("(")) !== -1) {
    start = inputString.lastIndexOf("(");
    let end = inputString.indexOf(")", start);
    let sub = inputString.substring(start + 1, end);
    let rev = sub.split("").reverse().join("");
    inputString = inputString.replace(`(${sub})`, rev);
  }
  return inputString;
}
