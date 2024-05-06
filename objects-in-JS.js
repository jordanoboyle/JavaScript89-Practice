//here we are going to cover the creation of a JavaScript Object (similar to a Hash object in Ruby or a Dict in Python)
//They function similarly and are updated in a similar way as well. (MAP OBJECTS ARE COVERED AS WELL)

// Here is our object....it is a person:

let person = {
  firstName: "John",
  lastName: "Wick",
  age: 35,
  city: "New York",
  profession: "Assassin"
};

// Let's access some keys and change them up just for a little fun

console.log(person.lastName);
console.log(person.lastName);
console.log(person.profession);

console.log("#" * 69);
//let's change some values and add a new one
console.log(person.age);
person.age = 40;
console.log(person.age);

person.weaponChoice = "All of them";
console.log(person);
console.log(person.weaponChoice);

console.log("#" * 69);

//Let's delete something from the Object

delete person.age;
console.log(person);
console.log(person.age);

console.log("#" * 69);
console.log("#" * 69);

//Here we are going to quick cover the Mapy Object and it's properties. 
// Map objects keep insertion order (Whereas Objects are limited to strings or SYMBOLS as keys, 
//Map Objects can have any type of key.) Use is site specific, but it can come in handy. (think dicts in Python)

let myMap = new Map();

// we are going to add multi type keys here for examples sake

myMap.set("key1", "value1");
myMap.set(["List", "Key"], "value2");
myMap.set(3, "value3");
myMap.set({ access: "object" }, "value4");

console.log(myMap);

console.log("#" * 69);
// Let's retrieve some values for the MAP using 'get'
console.log(myMap.get("key1"));
console.log(myMap.get({ access: "object" }));
console.log(myMap.get(3));

let objectKey = {access: "object"};  
console.log(myMap.get(objectKey));
/* while the above should theoretically work, it results in undefined. The inherent reason behind this is
because you are creating a new "object references", and because Map operates in on a strict === (equality) to 
compare keys. Sinces the references are different, the keys are different and therefore the result is undefined. 
this seems to be an ongoing issue, might be best to use Python code to circumvent this issue if needed.
the rest works as expected */

