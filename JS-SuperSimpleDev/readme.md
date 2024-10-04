<!-- # objects

which one should we use ? dot notation or brackets
- use dot notation by default
- for properties that do not work with dot, use brackets

 product.delivery-time = 10;  // wrong
 product['delivery-time] = 10   ///righth

 in this case one shoulde use barckets

     console.log(typeof console)  =>  object 
    console.log(typeof console.log)  => function

    Math.random()
    Math => object
    Math.random => function

- we can not compare object directly
- object shares reference 
- if i have declared as const , in that case too we can change the value



# JSON built in object

java script object notation
- a syntax
- similar to js object but has less feature
- json is universal
- not support function

### from js to  JSON
- JSON.stringify()

### from  JSON to js
- JSON.parse()



# local storage
- localStorage.setItem('message', 'hello') 
- localStorage.getItem
- localStorage.removeItem


---------------------------------------


const object4 = {
    message : 'Good Job!'
    price : 39
};

const message = object4.message
const {message} = object4;  //its called destructuring
const{message, price} = object4














# Document Object Model

- when any HTML element is inside java script , it is called java script object
- dociment objects are like a value , we can store the values in any variable


- if we use document.innerHTML = "           hii"  //it will consider in some cases space too 
- if we use document.innerText = "           hii"  //it will consider only text


----------------------------------------------------------------

- clicks and keydowns => events
- onclick, onkeydown  =>  event listeners
- eventkey





# windown object
- its represent the browser
- everything inside the browser represents the window objects







----

### Array and Loops
- myArray2 = [1, "hello", true, {name : "Suryansh"}, [1,2]]   typeof myarray2 => object
- myArray1 = [1,2,3,4,5,67]  typeof myarray1 => object

- myArray.splice(starting Index, n) => it will remove the n values from starting index          Example :      myArray.splice(0,2);


-  const newArray = myArray.slice(index, n)  => it will create a new array from using element of previous array without removing previous array elements   index=starting index and n = length of new array


- array always store refernce not data, if we copy an array into new array , in that case new array will store refernce of previous array .
- if we do any changes in new array . it will reflect in old array too



##### shortcut destructuring

- const [firstValue] = [1,2,3];
- console.log(firstValue);
- console.log(secondValue);



### Advanced Function
##### Important
- if humne koi function with name create kiy ahai to hum us function ko us created line s pahle bhi call kar sakte hai that is called hoisting
- yadi humne kisi function ko variable me store kiya hai to hum sirf use baad me hi use kar sakte hai , yha hoisting work njhi karti hai



- when any funuction is passed as argument of any function then it is called call back function means if we sending any function as argument then that argument function is called call back function -->







Here’s a more structured and polished version of your README file. I’ve organized the content for clarity and added some headings for better navigation. Feel free to customize any part to fit your style!

---

# JavaScript Concepts Overview

This README provides an overview of key JavaScript concepts, including objects, JSON, local storage, the Document Object Model (DOM), and arrays. 

## Table of Contents

- [Objects](#objects)
- [JSON](#json)
- [Local Storage](#local-storage)
- [Document Object Model (DOM)](#document-object-model-dom)
- [Window Object](#window-object)
- [Arrays and Loops](#arrays-and-loops)
- [Advanced Functions](#advanced-functions)

## Objects

### Dot Notation vs. Bracket Notation

- **Use dot notation by default.**
- **For properties that do not work with dot notation, use brackets.**

Example:
```javascript
product.deliveryTime = 10; // Incorrect
product['delivery-time'] = 10; // Correct
```

### Key Points

- You cannot compare objects directly.
- Objects share references.
- Even if declared as `const`, the properties of an object can still be changed.

### Type Checking

```javascript
console.log(typeof console); // 'object'
console.log(typeof console.log); // 'function'
```

Example of object and function:
```javascript
Math.random(); // function
Math; // object
Math.random; // function
```

## JSON

### Overview

- **JSON (JavaScript Object Notation)** is a syntax that is similar to JavaScript objects but with fewer features.
- JSON is universal and does not support functions.

### Converting Between JavaScript and JSON

- **From JavaScript to JSON:**
  ```javascript
  JSON.stringify(yourObject);
  ```

- **From JSON to JavaScript:**
  ```javascript
  JSON.parse(yourJSON);
  ```

## Local Storage

Local storage allows you to store data in a user's browser.

### Methods

- **Set an item:**
  ```javascript
  localStorage.setItem('message', 'hello');
  ```
- **Get an item:**
  ```javascript
  localStorage.getItem('message');
  ```
- **Remove an item:**
  ```javascript
  localStorage.removeItem('message');
  ```

## Document Object Model (DOM)

- Any HTML element within JavaScript is considered a JavaScript object.
- Document objects can be stored in any variable.

### InnerHTML vs. InnerText

- `document.innerHTML = "           hii";` // Considers whitespace.
- `document.innerText = "           hii";` // Ignores whitespace.

## Window Object

- The window object represents the browser.
- Everything inside the browser is represented by the window object.

## Arrays and Loops

### Array Overview

```javascript
const myArray2 = [1, "hello", true, {name: "Suryansh"}, [1, 2]]; // typeof myArray2 => 'object'
const myArray1 = [1, 2, 3, 4, 5, 67]; // typeof myArray1 => 'object'
```

### Array Methods

- **Splice:** Removes `n` elements from a starting index.
  ```javascript
  myArray.splice(startingIndex, n);
  ```

- **Slice:** Creates a new array from elements of the previous array without modifying it.
  ```javascript
  const newArray = myArray.slice(index, n);
  ```

### Reference Behavior

- Arrays store references, not data. Modifying a new array will reflect in the original array.

### Shortcut Destructuring

```javascript
const [firstValue] = [1, 2, 3];
console.log(firstValue); // 1
```

## Advanced Functions

### Hoisting

- Functions declared using the function keyword can be called before they are defined (hoisting).
- Functions stored in variables cannot be called before their declaration.

### Callback Functions

- A callback function is a function passed as an argument to another function.

---

Feel free to modify or expand on any section, and let me know if you need further assistance!