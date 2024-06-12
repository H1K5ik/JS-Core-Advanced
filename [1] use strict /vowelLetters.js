// ------------VARIANT 3-----------
// ' use strict '
// function vowelLetters(words){
//   let result = words.match(/[eyuioa]/gi);
//   return result ? result.length : 0
// }
// console.log(vowelLetters('qwerty'));

// ' use strict '
// function vowelLetters(words){
//   return words.split('').reduce((sum,el) => {if (el.match(/[eyuioa]+$/i)) return sum+1; else return sum},0)
// }
// console.log(vowelLetters('qwerty'));
' use strict '
function vowelLetters (words) {
  return words.split('').filter(char => 'eyuioa'.includes(char)).length;
}
console.log(vowelLetters('qwerty'));  
