module.exports = function check(str, bracketsConfig) {
  let bracketsObject = new Object();
  let arrOpenBrackets = [];
  for (let i of bracketsConfig) {
    bracketsObject[i[1]] = i[0];
  };
  for (let i of bracketsConfig) {
    arrOpenBrackets.push(i[0]);
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (arrOpenBrackets.includes(currentSymbol)) {
      if (bracketsObject[currentSymbol] === currentSymbol && topElement === currentSymbol) {
        stack.pop();
      } else {
         stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
     

      if (bracketsObject[currentSymbol] === topElement) {
       stack.pop();
      } else {
        return false;
      }
    }
   
  }
   return stack.length === 0;
 
}