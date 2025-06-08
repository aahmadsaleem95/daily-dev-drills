let lang = "reactjs";
let score = 22;
console.log(lang.toUpperCase());
console.log(score.toString());
// is everything in javascript is object?
// No let me introduce you to boxing
/* 
Boxing in JavaScript refers to the process of converting a primitive value (like a number, string, or boolean) into its corresponding object wrapper so that it can use methods and properties.

🔹 Why Boxing Happens
Primitive types like:
number
string
boolean

are not objects and normally don't have methods. But JavaScript allows us to do things like:

let str = "hello";
console.log(str.toUpperCase()); // "HELLO"

Here, str is a primitive string, but .toUpperCase() is a method of the String object. JavaScript automatically "boxes" the primitive into an object so the method can be called.

🔹 How It Works Internally
When you do:

let str = "hello";
str.toUpperCase();
JavaScript internally does something like this:

let temp = new String(str);  // Boxing
temp.toUpperCase();          // Method call
temp = null;                 // Unboxing (cleanup)
This is temporary and happens behind the scenes.

🔹 Object Wrappers in JavaScript
| Primitive Type | Object Wrapper |
| -------------- | -------------- |
| `string`       | `String`       |
| `number`       | `Number`       |
| `boolean`      | `Boolean`      |
| `symbol`       | `Symbol`       |
| `bigint`       | `BigInt`       |

🔹 Manual Boxing (Not Commonly Needed)
You can manually box a value:

let num = new Number(42); // Boxed
typeof num; // "object"

But this is not recommended, because it introduces unnecessary complexity.
*/
