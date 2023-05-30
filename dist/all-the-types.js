"use strict";
// Number
var num = 123;
// String
var str = "Hello, TypeScript!";
// Boolean
var bool = true;
// Object
var obj = { name: "John", age: 30 };
// Array
var arr = [1, 2, 3];
// Tuple
var tuple = ["TypeScript", 2023];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// Any
var anyValue = "This can be any type";
// Union
var union;
// Literal
var direction;
// Functions
function add(n1, n2) {
    return n1 + n2;
}
// Void
function logMessage() {
    console.log("This is a void function");
}
var mathOp = add;
// Function Types & Callbacks
function performOperation(x, y, callback) {
    var result = x + y;
    callback(result);
}
// Unknown
var userInput;
// Never
function throwError() {
    throw new Error("An error occurred");
}
// Null and Undefined
var nullValue = null;
var undefinedValue = undefined;
//# sourceMappingURL=all-the-types.js.map