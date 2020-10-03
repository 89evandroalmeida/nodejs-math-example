// const math = require('./math/index')
const math = require('@89evandroalmeida/nodejs-math-example@1.0.0')

console.log('a) 1 + 1');
console.log(math.add(1,1));

console.log('b) -123 + 123123');
console.log(math.add(-123,123123));

console.log('c) 8 * 0');
console.log(math.multiply(8,0));

console.log('d) 1239123 * 12313');
console.log(math.multiply(1239123,12313));

console.log('e) 123 / -12');
console.log(math.divide(123,-12));

console.log('f) 313123 / 0');
console.log(math.divide(313123,0));

console.log('Extras: texto e número');
console.log(math.add('a',1));
console.log(math.subtract(2,'b'));