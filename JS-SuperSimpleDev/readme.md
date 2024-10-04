# objects

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


-  const newArray = myArray.splice(index, n)  => it will create a new array from using element of previous array without removing previous array elements   index=starting index and n = length of new array
