'use strice';

let name = 'dodi';
console.log(name);
name = 'hello';
console.log(name);

age = 4;
var age;
console.log(age);

const count = 17;    // integer
const size = 17.1;    // decimal number(소수)
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${size}, type: ${typeof size}');

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

//boolean
const canRead = true;
const test = 3 < 1;    // false

// null
let nithing = null;    // null 값 할당

// undefined
let x;                 // 값이 할당되어 있지 않음

// symbol  고유한 식별자가 필요하거나, 동시다발적으로 발생할 때 우선순위를 주고 싶을 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 같은 id일지라도, 서로 다른 symbol로 만들어짐 - 고유한 식별자로 사용 가능

let text = 'hello';
text = 1;
text = '7' + 5;