// ----------------------- VARIANT 3 ----------------
console.log(num); // undefined vsplitie hoisting
var num = 5;
console.log(num)

// console.log(a)
// // ReferenceError: Cannot access 'a' before initialization
// console.log(b)
// // ReferenceError: Cannot access 'b' before initialization
// let a = 5
// const b = 5



// let a = 5
// let a = 10
// const b = 5
// const b = 10
// SyntaxError: Identifier 'a' has already been declared
// SyntaxError: Identifier 'b' has already been declared


// const a
// SyntaxError: Missing initializer in const declaration




// let name = 'Ольга'
// if (true) {
//   let name = 'Елена'
//   console.log(name)
//   // Елена
// }
// console.log(name)
// // Ольга




// var a
// console.log(a)
// // undefined
// var b = 5
// console.log(b)
// // 5

// if (true) {
//   var a = 5
// }
// function foo() {
//   var b = 10
// }
// console.log(a)
// // 5
// console.log(b)
// // ReferenceError: b is not defined




// function foobar(foo = bar, bar = 'bar') {
//   console.log(foo);
// }
// foobar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization BUT
// function foobar(foo = 'foo', bar = foo) {
//   console.log(bar);
// }
// foobar(); // "foo"



// console.log(typeof foo); // "undefined"
// var foo = 'foo'; BUT
// console.log(typeof foo); // "undefined"


// foo(); // "foo"

// function foo() {
//     console.log('foo');
// }



// foo(); // Uncaught TypeError: foo is not a function
// var foo = function () { }

// bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
// let bar = function () { }

// baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
// const baz = function () { }


// foo(); // Uncaught ReferenceError: foo is not defined


// v Eslint napishi i kaifui
// {
//   "no-use-before-define": ["error", { "functions": true, "classes": true, "variables": true }]
// }