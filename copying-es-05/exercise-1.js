let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

let person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/*Entrambi i nomi sono uguali perchè l'oggetto person2 è assegnato a person1 e 
quindi le variabili saranno le stesse. 
Di conseguenza se si modifica una delle proprietà di person2 essa cambierà
anche sull'oggeto person1 */