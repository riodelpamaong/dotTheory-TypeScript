// Function that accepts a default parameter and a rest parameters
const greetUser = (
  name: string = "Anonymous",
  ...additionalNames: string[]
): void => {
  console.log(`Hello, ${name}!`);
  if (additionalNames.length > 0) {
    console.log("Additional names:", additionalNames.join(", "));
  }
};

console.log(
  "`Function that accepts a default parameter and a rest parameters`"
);

// Example usage
greetUser();
greetUser("John");
greetUser("Alice", "Bob", "Charlie");

// Function that returns an array, and create variables that will accept the destructured values of the said function
const getArrayData = (): [string, number, boolean] => {
  // Generate array data
  const stringValue = "Hello";
  const numericValue = 42;
  const booleanValue = true;

  return [stringValue, numericValue, booleanValue];
};

const [stringValue, numericValue, booleanValue] = getArrayData();

console.log(
  "`Function that returns an array, and create variables that will accept the destructured values of the said function`"
);
console.log("string value: ", stringValue);
console.log("numberic value: ", numericValue);
console.log("boolean value: ", booleanValue);

// Function that returns an object, and create variables that will accept the destructured values of the said function
const getObjectData = (): {
  name: string;
  age: number;
  city: string;
} => {
  // Generate object data
  const name = "John Doe";
  const age = 25;
  const city = "New York";

  return { name, age, city };
};

const { name: userName, age, city } = getObjectData();

console.log(
  "`Function that returns an object, and create variables that will accept the destructured values of the said function`"
);
console.log("name: ", userName);
console.log("age: ", age);
console.log("city:", city);
