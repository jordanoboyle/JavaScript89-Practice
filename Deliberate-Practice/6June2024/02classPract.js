// 4. Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.

class Contact {
  constructor (name, age, contactInfo = {phone: "", email: ""}) {
    this.name = name;
    this.age = age;
    this.contactInfo = contactInfo;
  }

}

let personOne = new Contact("Jimmy Kirk", 65, {phone: "3307149638", email: "kirk@enterprise.com"});
console.log(personOne);

let personTwo = new Contact("John Wick", 55);
console.log(personTwo);
personTwo.contactInfo.phone = "4109873745";
console.log(personTwo);
personTwo.contactInfo.email = "john@continental.com";
console.log(personTwo);