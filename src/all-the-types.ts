// Number
let num = 123;

// String
let str = "Hello, TypeScript!";

// Boolean
let bool = true;

// Object
const obj: object = { name: "John", age: 30 };

// Array
const arr = [1, 2, 3];

// Tuple
const tuple: [string, number] = ["TypeScript", 2023];

// Enum
enum Color {
  Red = 1,
  Green,
  Blue,
}

// Any
let anyValue: any = "This can be any type";

// Union
let union: string | number;

// Literal
let direction: "up" | "down" | "left" | "right";

// Aliases
type User = {
  id: number;
  username: string;
  email: string;
};

// Functions
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Void
function logMessage(): void {
  console.log("This is a void function");
}

// Function as types
type MathOperation = (x: number, y: number) => number;
const mathOp: MathOperation = add;

// Function Types & Callbacks
function performOperation(
  x: number,
  y: number,
  callback: (result: number) => void
) {
  const result = x + y;
  callback(result);
}

// Unknown
let userInput: unknown;

// Never
function throwError(): never {
  throw new Error("An error occurred");
}

// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
