function solution(number)
{
  // convert the number to a roman numeral
  let result = ''
  const symbolArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  for (let i = 0; i < symbolArr.length; i++)
  {
    while (numberArr[i] <= number)
    {
      result += symbolArr[i]
      number -= numberArr[i]
    }
  }
  return result
}




// other nice answer
function solution(number){
    return [
      { threshold: 1000, char: 'M'},
      { threshold: 900,  char: 'CM'},
      { threshold: 500,  char: 'D'},
      { threshold: 400,  char: 'CD'},
      { threshold: 100,  char: 'C'},
      { threshold: 90,   char: 'XC'},
      { threshold: 50,   char: 'L'},
      { threshold: 40,   char: 'XL'},
      { threshold: 10,   char: 'X'},
      { threshold: 9,    char: 'IX'},
      { threshold: 5,    char: 'V'},
      { threshold: 4,    char: 'IV'},
      { threshold: 1,    char: 'I'}
    ].reduce(function(prev, curr, idx, arr)
    {
      while(number >= curr.threshold)
      {
        prev += curr.char;
        number -= curr.threshold;
      }
      
      return prev;
    }, '');
  }