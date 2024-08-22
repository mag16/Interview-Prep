# Javascript code problems ranging from the classics like fizzbuzz to strings etc.
* Code Wars

* LeetCode

# JavaScript Interview Questions
* Explain event delegation.

* Explain how this works in JavaScript.

* Can you give an example of one of the ways that working with this has changed in ES6?

* Explain how prototypal inheritance works.

* What is the difference between a variable that is: null, undefined or undeclared?

* How would you go about checking for any of these states?

* What is a closure, and how/why would you use one?

* What language constructions do you use for iterating over object properties and array items?

* Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?

* Сan you describe other popular methods for iterating over arrays?

* What is a typical use case for anonymous functions?

* What is the difference between host objects and native objects?

* Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?

* Explain the differences on the usage of foo between function foo() {} and var foo = function() {}

* Can you explain what Function.call and Function.apply do? What is the notable difference between the two?

* Explain Function.prototype.bind.

* What is the difference between feature detection, feature inference, and using the UA string?

* Explain "hoisting".

* What is type coercion? What are common pitfalls of relying on type coercion in JavaScript code?

* Describe event bubbling.

* Describe event capturing.

* What is the difference between an "attribute" and a "property"?

* What are the pros and cons of extending built-in JavaScript objects?

* What is the difference between == and ===?

* Explain the same-origin policy with regards to JavaScript.

* Why is it called a Ternary operator, what does the word "Ternary" indicate?

* What is strict mode? What are some of the advantages/disadvantages of using it?

* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

* What tools and techniques do you use debugging JavaScript code?

* Explain the difference between mutable and immutable objects.

* What is an example of an immutable object in JavaScript?

* What are the pros and cons of immutability?

* How can you achieve immutability in your own code?

* Explain the difference between synchronous and asynchronous functions.

* What is event loop?

* What is the difference between call stack and task queue?

* What are the differences between variables created using let, var or const?

* Can you change a property of an object defined via const? How you can change this behavior?

* What are the differences between ES6 class and ES5 function constructors?

* Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?

* What advantage is there for using the arrow syntax for a method in a constructor?

* What is the definition of a higher-order function?

* Can you give an example for destructuring an object or an array?

* Can you give an example of generating a string with ES6 Template Literals?

* Can you give an example of a curry function and why this syntax offers an advantage?

* What are the benefits of using spread syntax and how is it different from rest syntax?

* How can you share code between files?

* Why you might want to create static class members?

* What is the difference between while and do-while loops in JavaScript?

* What is a promise? Where and how would you use promise?

* Discuss how you might use Object Oriented Programming principles when coding with JavaScript.

* What is the difference between event.target and event.currentTarget?

* What is the difference between event.preventDefault() and event.stopPropagation()?

# Code Questions


* Question: What is the value of `foo`?
```javascript
var foo = 10 + '20';
```

* Question: What will be the output of the code below?
```javascript
console.log(0.1 + 0.2 == 0.3);
```

* Question: How would you make this work?
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

* Question: What value is returned from the following statement?
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

* Question: What is the value of `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) );
```

* Question: What is the outcome of the two alerts below?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

* Question: What is the value of `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

* Question: What is the value of `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

* Question: What does the following code print?
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
```

* Question: What is the difference between these four promises?
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

* Question: What will the code below output to the console and why?
```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

* Question: Consider the two functions below. Will they both return the same thing? Why or why not?
```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```