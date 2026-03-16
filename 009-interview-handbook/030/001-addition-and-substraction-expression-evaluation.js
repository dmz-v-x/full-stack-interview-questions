// Given a string "1+3-2", print the output "2"

// Brute Force: 
// 1. Parse numbers and operators separately
// 2. Store them in two arrays
// 3. Evaluate sequentially

// Time Complexity: O(n)
// Space Complexity: O(n)
function evaluateExpression(s){
  let numbers = [];
  let operators = [];
  let num = "";
  for(let ch of s){
    if(ch >= '0' && ch<= '9'){
      num += ch
    }else if(ch === '+' || ch === '-'){
      numbers.push(Number(num))
      operators.push(ch)
      num = ""
    }
  }

  numbers.push(Number(num))

  let result = numbers[0]
  for(let i = 0; i<operators.length; i++){
    if(operators[i] === '+'){
      result += numbers[i+1];
    }else {
      result -= numbers[i+1];
    }
  }
  return result;
}

// Better Approach
// 1. Maintain result
// 2. Maintain currentNumber
// 3. Maintain currentSign

// Time Complexity: O(n)
// Space Complexity: O(1)
function evaluateExpression(s){
  let result = 0;
  let num = 0;
  let sign = 1;

  for(let i = 0; i<s.length; i++){
    let ch = s[i];

    if(ch >= '0' && ch <= '9'){
      num = num * 10 + Number(ch)
    }

    if(ch === '+' || ch === '-' || i === s.length -1){
      result += sign * num
      num = 0;
      sign = ch === '+' ? 1 : 1;
    }
  }
  return result;
}
