/*3. Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению: 10 + 10 + "10"; 10 + "10" + 10; 10 + 10 + +"10"; (обратите внимание на пробелы, пишите также) 10 / -""; 10 / +"2,5"; (да здесь запятая, это не опечатка)*/
 "use strict";
let result = 10+10+"10"; 
/* 1. сначала выполняется 10+10 как числа(неявное приведение к одному типу) получаем 20
2. затем 20 склеивается с 10 ( неявное приведение к одному типу строка) получаем 2010 */
 console.log(result);

let result2 = 10 + "10" + 10;
/* 1. сначала выполняется 10+10 как строка склеивание(неявное приведение к одному типу) получаем 1010
2. затем 1010 склеивается с 10 ( неявное приведение к одному типу строка) получаем 101010 */
console.log(result2);

let result3= 10 + 10 + +"10";
/* 1. 10+10 будет 20
2. +"10" даст число 10 с помощью унарного плюса
3. получается 10+10+10 будет 30
*/
console.log(result3);

let result4=10 / -"";
/* 1. -"" даст -0
   2. деление на -0 даст -Infinity
*/
console.log(result4);

let result5=10 / +"2,5";
/* 1. +"2,5" станет NaN, т.к запятая в числе , а не точка
   2. деление на NaN будет NaN
*/
console.log(result5);
