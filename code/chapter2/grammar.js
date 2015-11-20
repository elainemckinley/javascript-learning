// variable declaration
var thing = 'stuff';
console.log(thing);

/* java style comments - don't use because commenting regexes can cause issues. */

// javascript has a single numeric type.
console.log(1.0 === 1);

// integer
console.log(1);
// floating point
console.log(1.5);
// exponent
console.log(3e2);

// String literals can be single or double quoted.
console.log("some string");
console.log('the same string');

// Strings are treated as objects.
console.log('uppercase'.toUpperCase());

// Falsy values: false, null, undefined, '', 0, NaN
// All other valuse are truthy.
if (false || null || undefined || '' || 0 || NaN) {
  console.log('falsy values! this will never print.');
}

// Case statements
switch (thing) {
  case 'stuff':
    console.log('a lot like java.');
    break;
  case 'other stuff':
    console.log('this will not be printed.');
    break;
}

// loops
var list = ['first thing', 'second thing', 'third thing'];

// while loop
while (false) {
  console.log('same as java');
}

// for loop
for (var i=0; i < list.length; ++i) {
  console.log('printing the ' + list[i]);
}

// for-in loop: usually not ideal, since it should have list.hasOwnProperty(item)
// to make sure the item was found on the array, not on the array prototype.
// Enumerates on the
for (var i in list) {
  console.log('printing the ' + list[i] + ' again');
}

// try-catch block
try {
  throw 'intentionally thrown exception';
} catch (ex) {
  console.log('caught exception: ' + ex);
}

// typeof
console.log(typeof 1.0);
console.log(typeof 'string');
console.log(typeof {});
console.log(typeof true);
console.log(typeof function(foo) {});

// object literal
var obj = {
  'first_member': 1.0,
  'second_member': 'value'
};
console.log(obj);

// function declaration
function foo (var1, var2) {
  console.log('var1 is ' + var1);
  console.log('and var2 is ' + var2);
}
var bar = new function (var1, var2) {
  console.log('bar\'s var1 is ' + var1);
  console.log('bar\'s and var2 is ' + var2);
}
foo('first param', 'second param')
