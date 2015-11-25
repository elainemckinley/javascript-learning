// Object literal:
var stooge = {
  'firstName': 'Jerome',
  'lastName': 'Howard'
};

console.log(stooge);

// Quotes are usually not required around property names.
// Only required when the property name is not a valid JS name.
var foo = {
  firstName: 'Billy', // this is fine.
  // first-name: 'Billy', // this is not; contains math operator.
  'this': 'that', // this is fine.
  // this: 'that' // also not good: this is a keyword.

  // Objects can be nested.
  address: {
    houseNumber: '123',
    street: 'fake st',
    zip: '01234'
  }
};

console.log(foo);

// Retrieving properties
// If the property name is a valid JS name, you can use the '.' operator.
console.log(foo.firstName);

// If not, the bracketed syntax must be used.
console.log(foo['this']);

// If a property is not found, undefined will be the result.
console.log(foo.bar);
console.log(foo['bar']);

// Use || for default values:
console.log(foo.bar || 'foo.bar not found');

// Retrieving values from undefined throws a TypeError exception
// Guard against this with &&
foo.do_something && foo.do_something.do_some_other_thing;

// Updating a value changes the shape of the object if not present...
foo.bar = 'bar';
// ...and updates the existing value if it does.
foo.firstName = 'Bob';

// Objects are passed around by reference.
var a = b = {};
a.foo = 'value';
console.log(b);

// Prototyping
// TODO: come back to this after Ch. 4 or 6

// Inspecting objects: typeof determines the value type of a property
console.log(typeof foo.firstName);
console.log(typeof foo.constructor);

// Can also see if that property belongs to the object itself or the prototype
console.log(foo.hasOwnProperty('firstName')); // returns true
console.log(foo.hasOwnProperty('constructor')); // returns false

// Can enumerate over properties in an object. No guarantee of order.
// If order is important, you must make an array of properties first and use
// a normal for loop.
for(var prop in foo) {
  if (typeof foo[prop] !== 'function') {
    console.log('type of ' + prop + ' is: ' + typeof foo[prop]);
  }
}

// Delete operator removes a property entirely from an object. (Shape)
// Note that this does not touch the prototpye, so if the prototype has a
// property it will use that instead.
delete foo.firstName;
console.log(foo.firstName);

// To avoid global variables, it can be useful to have a single global for your
// application to use.
// This helps to avoid conflict with other applications and libraries.
var MYAPP = {};
MYAPP.thing = 'a thing'; // etc.
