// function add(a, b) {
//     return a + b;
// }
//  Convert to Arrow Function

const add = (a,b)=> a+b;
console.log(add(3,4));

// Default Parameters

function greet(name,message=" Welcome"){
    console.log("Hi " + name + message);
}

greet("Aditi", " How are you" )
greet("Akanchha");

// Template Literals

(function formatString(name,age){
    console.log(`Hello, my name is ${name}  and I am ${age} years old.`)
})("Aditi","21");

// Write a function that extracts the name and city properties and logs the sentence: 
// "Alice lives in New York." It should also access and log the address object.


const person = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    country: 'NY'
  }
};

const objectDestructing=(person)=>{
    const { name, address: {city,country}}=person;
    console.log(`${name} lives in ${city}`);

    console.log("Address: ", person.address);

};

objectDestructing(person);

const sumAll=(...numbers)=>{
    let sum=0;
    numbers.forEach(element => {
        sum+=element;
    });

    console.log("Sum is: "+ sum);
}

// Write a function sumAll that takes any number of arguments and returns their sum. 
// Use the rest operator to handle the arguments.

sumAll(1,2,3,5,6,7,8);

// Write a function filterEvens that takes an array of numbers and returns a new array 
// containing only the even numbers. Use the filter method.

const filterEvens= (numArray)=>{
    return numArray.filter((num)=>{ return num%2===0});
    
}
console.log(filterEvens([3,4,8]));

// Write a function doubleValues that takes an array of numbers and returns a new array 
// where each number is doubled. Use the map method.

const doubleValues = (numbers) => {
  return numbers.map(num => num * 2);
}
console.log(doubleValues([2,3,4.5,6]));


// Write a function findMax that takes an array of numbers and returns the largest number 
// in the array. Use the spread operator.

const findMax = (numbers) => {
  return Math.max(...numbers);
}
console.log(findMax([8,7,6,9,3,4]));


// Write a function that extracts the age as  “24”  and name as “Alice” and returns a sentence: 
// "Alice’s age is 24."

const data = [
  { name: "Bob", age: 24 },
  { name: "Alice", age: 21 }
];

const returnSentence = (data) => {
  const [{ age }, { name }] = data;

  return `${name}'s age is ${age}.`;
}
console.log(returnSentence(data));


// Write a function that manipulates data in such a way that it returns an array of objects 
// again but with the selected keys only.

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  }
];

const manipulateData = (data) => {
  return data.map(({ id, title, rating: { rate, count } }) => ({
    id,
    title,
    rate,
    count
  }));
};

console.log(manipulateData(products));

// Print Output

 const fun = (name = "abc") => {
        if (name) {
          console.log("if", name);
        } else {
          console.log("else", name);
        }
      };
	  
fun("");  // else

// Write a function deepClone that creates a deep copy of a given object. Ensure that nested objects 
// and arrays are properly cloned without retaining references to the original object.

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const obj = { a: 1, b: { c: 2 } };

const clonedObj = deepClone(obj);
clonedObj.b.c = 42;

console.log(obj.b.c);
console.log(clonedObj.b.c);


// Write a function flattenArray that takes a nested array and returns a flattened array. 
// Use recursion and/or ES6 methods to solve this problem.

const flattenArray = (arr) =>
  arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? flattenArray(val) : val), []
  );

console.log(flattenArray([1, [2, [3, [4, 5]]]]));