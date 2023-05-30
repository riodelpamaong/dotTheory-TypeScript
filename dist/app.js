"use strict";
// Function that accepts a default parameter and a rest parameters
var greetUser = function (name) {
    if (name === void 0) { name = "Anonymous"; }
    var additionalNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        additionalNames[_i - 1] = arguments[_i];
    }
    console.log("Hello, ".concat(name, "!"));
    if (additionalNames.length > 0) {
        console.log("Additional names:", additionalNames.join(", "));
    }
};
console.log("`Function that accepts a default parameter and a rest parameters`");
// Example usage
greetUser();
greetUser("John");
greetUser("Alice", "Bob", "Charlie");
// Function that returns an array, and create variables that will accept the destructured values of the said function
var getArrayData = function () {
    // Generate array data
    var stringValue = "Hello";
    var numericValue = 42;
    var booleanValue = true;
    return [stringValue, numericValue, booleanValue];
};
var _a = getArrayData(), stringValue = _a[0], numericValue = _a[1], booleanValue = _a[2];
console.log("`Function that returns an array, and create variables that will accept the destructured values of the said function`");
console.log("string value: ", stringValue);
console.log("numberic value: ", numericValue);
console.log("boolean value: ", booleanValue);
// Function that returns an object, and create variables that will accept the destructured values of the said function
var getObjectData = function () {
    // Generate object data
    var name = "John Doe";
    var age = 25;
    var city = "New York";
    return { name: name, age: age, city: city };
};
var _b = getObjectData(), userName = _b.name, age = _b.age, city = _b.city;
console.log("`Function that returns an object, and create variables that will accept the destructured values of the said function`");
console.log("name: ", userName);
console.log("age: ", age);
console.log("city:", city);
//# sourceMappingURL=app.js.map