// I. Function Objects
// Functions in JS are objects, linked to Function.prototype (which in turn is linked to Object.prototype).
// Functinos can be passed to functions and returned from them, and functions can have their own methods.

// II. Function Literal
var add = function(a, b) {
  return a + b;
};

// Functions can be defined anywhere, such as inside other functions.

// III. Invocation
// Number of arguments and argument type are not checked. Missing arguments are simply 'undefined'.
console.log(add(2, 3));

// IV. The Method Invocation Pattern
var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

console.log('value is ' + myObject.value);
myObject.increment();
myObject.increment(3);
console.log('value after incrementing is ' + myObject.value);

// V. The Function Invocation Pattern
// Weirdly, when a method is invoked as a function (not part of an object), 'this' refers to the global scope.
myObject.double = function() {
  var helper = function() {
    this.value = add(this.value, this.value);
  };

  helper(); // this.value is undefined, since 'this' refers to global scope. However, if we bind 'this' to another variable:
};

myObject.double();
console.log('value after failed doubling is ' + myObject.value);

myObject.double = function() {
  var that = this;
  var helper = function() {
    that.value = add(that.value, that.value);
  };

  helper(); // Now this works, since the value of 'this' was stored in the 'that' variable and used in the helper function.
};

myObject.double();
console.log('value after real doubling is ' + myObject.value);

// V. The Constructor Invocation Pattern
// If a function is invoked with the 'new' prefix, a new object will be created with:
//  * A link to the function's prototype member
//  * 'this' bound to that new object
var Quo = function(string) {
  this.status = string;
};

Quo.prototype.get_status = function() {
  return this.status;
};

var myQuo = new Quo('confused');

// Naming convention for constructors uses uppercamelcasing. The method can be called without the new operator,
// but bad things can happen that won't trigger compile or runtime warnings if this were to happen.
// Use of this style of constructor functions is not recommended.

// VI. The Apply Invocation Pattern
// The apply method uses an array of arguments to use as a function invocation,
// as well as letting the caller choose the value of 'this'.
var array = [3, 4];
var that = this;
var sum = add.apply(that, array)
console.log(sum);

var statusObject = {
  status: 'A OKAY'
};

var status = myQuo.get_status.apply(statusObject);
console.log(status); // Prints 'A OKAY'

// VII. Arguments
// A bonus parameter that is available to all functions is the arguments array. (Not actually an array...just array like.)
// This allows a variable number of params when calling a function.
var sum = function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return sum;
};

console.log(sum(5, 5, 5, 5, 5)); //25

// VIII. Return
// If no return value is specified, returns undefined.
// If the function was invoked with the new prefix and the return value is not an object, then 'this' is returned instead.

// IX. Exceptions
var add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add method requires numbers.'
    };
  }
  return a + b;
};

try {
  add('seven', 'six');
} catch(e) {
  console.log('exception of type ' + e.name + ' caught.');
}

// X. Augmenting Types
// Similar to how adding a method to Object.prototype makes that method available to all objects,
// you can add methods to arrays, functions, strings, number, regexes, and booleans.

Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};
// Now we don't have to type 'prototype' each time we want to modify a method.

Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10/3).integer());

// Remove spaces from the end of a string:
String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});

console.log('**************                  '.trim() + 'no spaces before this');

// XI. Recursion
var hanoi = function hanoi(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};

hanoi(3, 'src', 'aux', 'dst');

// Javascript does not offer tail recursion optimization.

// XII. Scope
// Javascript does not have block scope, but it does have function scope.
{
  seven = '7';
}
console.log(seven); // prints '7'

var foo = new function(eight) {
  eight = '8'
  nine = '9'
};
// console.log(eight); // eight is not defined.
console.log(nine); // nine is defined.

// for this reason it's usually advisable to declare all variables used in a function
// at the top of the function body.

// XIII. Closure
// TODO: come back to this section, a bit confusing at the moment.
var myObject = (function() {
  var value = 0;

  return {
    increment: function(inc) {
      value += typeof inc === 'umber' ? inc : 1;
    },
    getValue: function() {
      return value;
    }
  };
}());

var quo = function(status) {
  return {
    get_status: function() {
      return status;
    }
  };
};

var myQuo = quo('amazed');
console.log(myQuo.get_status());
console.log(myQuo.status); // undefined

// The quo function has access to the context which it was created.
// This is called closure.

// Avoid creating functions within a loop.

// XIV. Callbacks
// TODO: also revisit this section. Unclear what is happening in the code example.

// XV. Module
// A module is a function or object that presents an interface, but hides its state and impl.
