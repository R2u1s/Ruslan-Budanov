import '../pages/index.css'; // добавьте импорт главного файла стилей

/* const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10 */

/* const input = 'red.big.apple';
const object = {
  red: {
    big: {
      apple: 'apple1'
    }
  }
}

console.log(
  (function (input,object) {
    return input.split('.').reduce((res,item)=>{return res[item]},object)
  })(input,object)
); */

var reversePrefix = function(word, ch) {
  let first = word.slice(0,word.indexOf(ch)+1);
  const second = word.slice(word.indexOf(ch)+1);
  return first.reverse()+second;
};

reversePrefix('abcdefd','d');